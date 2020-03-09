import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router,
              private tokenStorage: TokenStorageService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenStorage.getRoleName()) {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
    if ((this.tokenStorage.getRoleName() === 'ROLE_ADMIN' )
      || ( this.tokenStorage.getRoleName() === 'ROLE_MEMBER' )
      || (this.tokenStorage.getRoleName() === 'ROLE_USER') ) {
      // logged in so return true
      return true;
    }
    this.router.navigate(['/403-forbidden']);
    return false;
  }
}
