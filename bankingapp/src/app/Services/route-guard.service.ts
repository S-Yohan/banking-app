import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})


export class RouteGuardService implements CanActivate{

  constructor(private authService: AuthService,
    private router: Router) { }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      //window.alert("You don't have permission to view this page");
      return this.router.createUrlTree(['/login']); 
      
      
    }
  }
}
