import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  public API = 'http://localhost:8080/user';

  constructor(public http: HttpClient) {
  }

  getUserProfileById(id): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  editUserProfile(userProfile, id): Observable<any> {
    return this.http.put(this.API + '/' + id , userProfile);
  }


}
