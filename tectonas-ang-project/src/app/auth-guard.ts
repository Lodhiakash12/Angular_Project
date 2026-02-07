import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {

  const router = inject(Router);
  const value = localStorage.getItem('isLoggedIn');

  if (value === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
