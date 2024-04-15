import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';
import { inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getAuthState().pipe(
      tap(authState => {
        console.log(authState); 
        if (!authState) {
          this.router.navigate(["/views/login"]);
          console.log("Nicht authentifiziert, umleiten...");
        }
      }),
      map(authState => !!authState) 
    );
  }
}
export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate();
};
