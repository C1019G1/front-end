import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfilebApi, UserProfileDTO} from '../admin/admin-user-manager/admin-user-manager.component';
import {TokenStorageService} from './auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AdminUserListService {
  httpOptions: any;
  public API = 'http://localhost:8080/admin/';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken()})
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getUserProfileList(page: number, size: number, name: string, rank: string): Observable<any> {
    return this.http.get<UserProfilebApi>(this.API + 'user-list?page=' + page + '&size=' + size + '&name=' + name + '&rank=' + rank, this.httpOptions);
  }

  findUserProfile(id: number, email: string): Observable<any> {
    return this.http.get<UserProfileDTO>(this.API + 'find?id=' + id + '&email=' + email, this.httpOptions);
  }

  register(userDTO): Observable<any> {
    return this.http.post(this.API + 'user-register', userDTO, this.httpOptions);
  }
  lockUsers(userList): Observable<any>{
    return this.http.post(this.API + 'user-lock', userList, this.httpOptions)
  }
}
