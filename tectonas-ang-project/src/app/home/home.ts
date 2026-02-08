import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  name: string = '';
  email: string = '';
  age: number | null = null;

  users: { name: string; email: string; age: number }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }

  addUser(form: NgForm): void {

    if (form.invalid || this.age === null) {
      return;
    }

    this.users.push({
      name: this.name,
      email: this.email,
      age: this.age
    });

    localStorage.setItem('users', JSON.stringify(this.users));

    form.resetForm();


    this.name = '';
    this.email = '';
    this.age = null;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
