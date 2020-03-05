import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankListService {
  public API = 'http://localhost:8080/admin/rank-list';

  constructor(public http: HttpClient) {
  }

  getRankList(page: number, size: number, search: string): Observable<any> {
    return this.http.get(this.API + '');
  }
}
