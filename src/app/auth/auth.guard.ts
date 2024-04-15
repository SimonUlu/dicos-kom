import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    const authState = this.authService.getAuthState();

    console.log(authState);

    if (!authState) {
      this.router.navigate(["/views/login"]);
      console.log("hallo");
    }

    return authState;
  }
}
export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate();
};
