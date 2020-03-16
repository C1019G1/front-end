import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryRegisterProductService {
  public API = 'http://localhost:8080/product/reg';
  constructor( public http: HttpClient) { }

  getHistoryRegisterProductByUserId( id: number): Observable<any> {
    return this.http.get(this.API + '?userId=' + id + '&page=0' + '&size=2');
  }


  getAllHistoryRegisterProduct(): Observable<any> {
    return this.http.get(this.API);
  }


  getHistoryAuctionProductByUserId( id: number ): Observable<any> {
    return this.http.get(this.API + '/auc' + '?userId' + id + '&page=0' + '&size=5');
  }
 // http://localhost:8080/product/prod?userId=1&page=0&size=5
}
