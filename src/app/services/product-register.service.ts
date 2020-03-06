import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {
  public API = 'http://localhost:8080/product';
  constructor( public http: HttpClient) { }
  getAllProduct(): Observable<any> {
    return this.http.get(this.API + '/list');
  }
  getProductById(productId): Observable<any> {
    return this.http.get(this.API + '/' + productId );
  }
}
