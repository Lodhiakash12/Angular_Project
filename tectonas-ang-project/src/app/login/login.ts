import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {

    if (this.username === '' || this.password === '') {
      this.error = 'All fields are required';
      return;
    }

    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
