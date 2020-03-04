import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {
  public API = 'http://localhost:8080/product-list';
  constructor( public http: HttpClient) { }
  getAllProduct(): Observable<any> {
    return this.http.get(this.API);
  }
}
