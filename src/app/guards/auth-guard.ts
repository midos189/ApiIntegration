import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(Auth);
  const rout=inject(Router);
  if(auth.islogged()){
    return true;
  }else{
    rout.navigate(['/Login'])
    return false;
  }
};
