import { Routes } from '@angular/router';
import { Login } from './login/login';

import { AuthGuard } from './auth-guard';

import { Home } from './home/home';


export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  
  { path: 'home', component: Home, canActivate: [AuthGuard] }
];
