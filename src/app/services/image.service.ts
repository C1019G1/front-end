import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public API = 'http://localhost:8080/img/';
  constructor(public http: HttpClient) { }
  uploadAllImg(imgUrls): Observable<any> {
    return this.http.post(this.API + 'upload', imgUrls);
  }
}
