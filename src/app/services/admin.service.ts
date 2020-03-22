import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public API = 'http://localhost:8080/admin';

  constructor(public http: HttpClient) {
  }

  getInforProduct(id): Observable<any> {
    return this.http.get(this.API + '/get-infor-product?id=' + id);
  }
  saveProductInfor(productInfor): Observable<any> {
    return this.http.post(this.API + '/save-product', productInfor);
  }
}
