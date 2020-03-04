import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserListService {
  public API = 'http://localhost:8080/admin/user-list';

  constructor(public http: HttpClient) {
  }

  getUserProfileList(page: number, size: number, search: string): Observable<any> {
    return this.http.get(this.API + '?page=' + page + '&size=' + size + '&search=' + search);
  }
}
