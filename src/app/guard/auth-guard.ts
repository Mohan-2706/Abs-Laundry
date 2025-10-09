import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../service/api/user';

export const tokenLessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const guardService = inject(User);
  const token = guardService.getUsertoken();
  if (token == null) { return true } else { router.navigateByUrl("/home"); return false };
};

export const tokenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const guardService = inject(User);
  const token = guardService.getUsertoken();
  if (token == null) { router.navigateByUrl(""); return false } else { return true };
};
