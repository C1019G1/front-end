import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/auth/token-storage.service';
import {CookieStorageService} from '../services/auth/cookie-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {
  constructor(private router: Router,
              private cookieStorageService: CookieStorageService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (this.cookieStorageService.getUsername()) {
     this.router.navigate(['/product/list']);
     return false;
   }
   return true;
  }
}
