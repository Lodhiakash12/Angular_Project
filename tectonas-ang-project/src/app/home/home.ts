import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {


  name = '';
  email = '';

  age = '';

  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('users');

    if (data) {

      this.users = JSON.parse(data);
    }
  }

  addUser(form: any) {

  if (form.invalid) {


    return;
  }

  this.users.push({
    name: this.name,
    email: this.email,
    age: this.age
  });

  localStorage.setItem('users', JSON.stringify(this.users));

  form.resetForm();   
  
}





  deleteUser(index: number) {
    this.users.splice(index, 1);
    
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
