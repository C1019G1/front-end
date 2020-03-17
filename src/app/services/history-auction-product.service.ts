import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryAuctionProductService {
  public API = 'http://localhost:8080/product/auc';
  constructor( public http: HttpClient) {
  }

  getAllHistoryAuctionProduct(): Observable<any> {
    return this.http.get(this.API);
  }


  getHistoryAuctionProductByUserId( id: number ): Observable<any> {
    return this.http.get(this.API + '?userId=' + id + '&page=0' + '&size=5');
  }
  // http://localhost:8080/product/auc?userId=1&pageable=0&size=5
}
