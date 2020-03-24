import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'http://localhost:8080/';

  constructor(public http: HttpClient) {
  }

  register(user): Observable<any> {
    return this.http.post(this.API + 'register', user);
  }

  getLoginHistory(username): Observable<any> {
    return this.http.post(this.API + 'login-history', username);
  }

  changePassword(changePasswordForm): Observable<any> {
    return this.http.post(this.API + 'change-password', changePasswordForm);
  }

  resetPassword(resetPasswordForm): Observable<any> {
    return this.http.post(this.API + 'reset-password', resetPasswordForm);
  }

  getCart(username: string): Observable<any> {
    return this.http.get(this.API + 'cart?userName=' + username);
  }
}
