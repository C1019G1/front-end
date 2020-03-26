import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminExchangeService {
  public API1 ='http://localhost:8080/product/';
  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken()})
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  getUserTransactionList(page: number, size: number): Observable<any> {
    return this.http.get(this.API1 + 'transaction?page='+ page+ '&size='+ size);
  }

  searchUserTransaction(page: number, size: number, buyer: string, seller: string, productName: string, firstDateSt: string, lastDateSt: string, status: string) : Observable<any>{
    return this.http.get(this.API1 + 'transaction-search?page='+ page+ '&size='+ size+'&buyer='+buyer+"&seller="+seller+'&productName='+productName+'&firstDateSt='+firstDateSt+'&lastDateSt='+lastDateSt+'&status='+status);
  }
  // deleteTransaction(userTransactionDTO: UserTransactionDTO): Observable<any>{
  //   return this.http.post(this.API1 + 'transaction-delete', userTransactionDTO, this.httpOptions);
  //
  // }
  delete( id: number) : Observable<any>{
    console.log('serviceid:'+ id);
    return this.http.get(this.API1 + 'transaction-delete?id='+id);
  }
}
