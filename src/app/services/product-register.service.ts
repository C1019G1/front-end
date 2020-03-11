import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {
  public API = 'http://localhost:8080/product';

  constructor(public http: HttpClient) {
  }

  getAllProduct(page: number, catalogue: string): Observable<any> {
    return this.http.get(this.API + '/list?page=' + page + '&size=6&&catalogue=' + catalogue );
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get(this.API + '/' + productId);
  }

  searchByNameCataloguePrice(page: number, name: string, catalogue: string, price1: number, price2: number): Observable<any> {
    return this.http.get(this.API + '/search?' +
      'page=' + page + '&size=3&name=' + name + '&catalogue=' + catalogue + '&price1=' + price1 + '&price2=' + price2);
  //  search?page=0&size=9&name=iph&catalogue=Công nghệ&price1=0&price2=9000000
  }
  getAllProductByCatalogue(page: number, catalogue: string): Observable<any> {
    return this.http.get(this.API + '/search?page=' + page + '&size=6' + '&catalogue=' + catalogue);
  }
}
