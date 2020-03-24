import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public API = 'http://localhost:8080/';
  constructor(public http: HttpClient) { }
  getAllCatalogue(user): Observable<any> {
    return this.http.get(this.API + 'product/get-all-catalogue');
  }
}
