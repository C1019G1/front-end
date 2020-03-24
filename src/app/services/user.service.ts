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
  getInforProduct(id): Observable<any> {
    return this.http.get(this.API + 'get-infor-product?id=' + id);
  }
  saveProductInfor(productInfor): Observable<any> {
    return this.http.post(this.API + 'save-product', productInfor);
  }
  getInforUser(userName): Observable<any> {
    return this.http.post(this.API + 'get-infor-user', userName);
  }

  getCart(username: string): Observable<any> {
    return this.http.get(this.API + 'cart?userName=' + username);
  }
}
