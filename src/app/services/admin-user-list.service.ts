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
  lockUsers(userList): Observable<any> {
    return this.http.post(this.API + 'user-lock', userList, this.httpOptions);
  }



  // ProductManager


  getProductManager(page: number, size: number): Observable<any> {
    return this.http.get(this.API + 'prod-manager?page=' + 0 + '&size=' + 5);
  }
  searchByNameProductAndCatalogueAndUserNameAndPriceAndStatus(page: number, size: number, nameProduct: string, catalogue: string, userName: string, startPrice1: number, startPrice2: number, status: boolean): Observable<any> {
    return this.http.get(this.API + 'prod-manager/search?' +
      'page=' + page + '&size=' + size + '&nameProduct=' + nameProduct + '&catalogue=' + catalogue + '&userName=' + userName + '&startPrice1=' + startPrice1 + '&startPrice2=' + startPrice2 + '&status=' + status);
    // http://localhost:8080/admin/prod-manager/search?page=0&size=5&nameProduct=Ôtô Camrry&catalogue=Dân dụng&userName=chanhtv&startPrice1=1&startPrice2=1000000000&status=True
  }

  getProductDetailById(productId: number): Observable<any> {
    return this.http.get(this.API + 'prod-detail/' + productId);
  }
}
