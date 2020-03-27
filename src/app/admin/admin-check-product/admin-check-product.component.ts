import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminUserListService} from '../../services/admin-user-list.service';
import {FormBuilder, FormGroup} from '@angular/forms';

// export interface ProductDetail {
//   nameProduct;
//   userName;
//   email;
//   catalogue;
//   startPrice;
//   minBet;
//   img;
//   startDay;
//   endDay;
//   productInfo;
// }
@Component({
  selector: 'app-admin-check-product',
  templateUrl: './admin-check-product.component.html',
  styleUrls: ['./admin-check-product.component.css']
})
export class AdminCheckProductComponent implements OnInit {
  public idProduct: any;
  public productDetail;

  constructor(
    public activatedRoute: ActivatedRoute,
    private adminUserListService: AdminUserListService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.idProduct = data.id;
      this.adminUserListService.getProductDetailById(this.idProduct).subscribe(data1 => {
        this.productDetail = data1;
        console.log(data1);
      });
    });
  }
}
