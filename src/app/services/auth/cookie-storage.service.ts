import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const TOKEN_ROLE_NAME = 'AuthRoleName';
@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor( private cookieService: CookieService) { }
  signOut() {
    this.cookieService.delete(TOKEN_KEY, '/', 'localhost:4200');
    this.cookieService.delete(USERNAME_KEY, '/', 'localhost:4200');
    this.cookieService.delete(TOKEN_ROLE_NAME, '/', 'localhost:4200');
  }
  public saveToken(token: string, cookieExpireTime: any) {
    this.cookieService.delete(TOKEN_KEY);
    this.cookieService.set(TOKEN_KEY, token, cookieExpireTime);
  }

  public getToken(): string {
    return  this.cookieService.get(TOKEN_KEY);
  }
  public saveUsername(username: string, cookieExpireTime: any) {
    this.cookieService.delete(USERNAME_KEY);
    this.cookieService.set(USERNAME_KEY, username, cookieExpireTime);
  }

  public getUsername(): string {
    return  this.cookieService.get(USERNAME_KEY);
  }
  public saveRoleName(rolename: string, cookieExpireTime: any) {
    this.cookieService.delete(TOKEN_ROLE_NAME);
    this.cookieService.set(TOKEN_ROLE_NAME, rolename, cookieExpireTime);
  }

  public getRoleName(): string {
    return this.cookieService.get(TOKEN_ROLE_NAME);
  }
}
