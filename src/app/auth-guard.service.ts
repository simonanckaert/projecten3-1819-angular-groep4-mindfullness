import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
// Import our authentication service

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router, private af: AngularFireAuth) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.af.user) {
      return true;
    }
    // Retain the attempted URL for redirection
    //this.authService.redirectUrl = '/login'
    this.router.navigate(['/login']);
    return false;
  }

}
