import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfilebApi, UserProfileDTO} from '../admin/admin-user-manager/admin-user-manager.component';

@Injectable({
  providedIn: 'root'
})

export class AdminUserListService {
  public API = 'http://localhost:8080/admin/user-list';

  constructor(public http: HttpClient) {
  }

  getUserProfileList(page: number, size: number, search: string): Observable<UserProfilebApi> {
    return this.http.get<UserProfilebApi>(this.API + '?page=' + page + '&size=' + size + '&search=' + search);
  }
}
