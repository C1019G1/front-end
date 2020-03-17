import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/auth/token-storage.service';
import {CookieStorageService} from '../services/auth/cookie-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private cookieStorageService: CookieStorageService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.cookieStorageService.getRoleName()) {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
    if (this.cookieStorageService.getRoleName() === 'ROLE_ADMIN') {
      // logged in so return true
      return true;
    }
    this.router.navigate(['/403-forbidden']);
    return false;
  }
}
