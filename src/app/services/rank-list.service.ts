import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RankListService {
  public API = 'http://localhost:8080/admin/rank-list';
  httpOptions: any;

  constructor(public http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : `Bearer `  + this.tokenStorage.getToken()})
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getRankList(): Observable<any> {
    return this.http.get(this.API + '', this.httpOptions);
  }
}
