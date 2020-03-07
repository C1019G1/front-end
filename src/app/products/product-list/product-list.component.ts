import {Component, OnInit} from '@angular/core';
import {ProductRegisterService} from '../../services/product-register.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {any} from 'codelyzer/util/function';

export interface Product {
  id;
  name_product;
  current_price;
  end_day;
  img;
  catalogue;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productRegisterList;
  public dataGet: [];
  page = 0;
  notLoad = false;
  public formSearch: FormGroup;

  constructor(public productRegisterServiece: ProductRegisterService,
              public  dialog: MatDialog,
              public formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      name: [''],
      catalogue: [''],
      price: [''],
    });
    this.productRegisterServiece.getAllProduct(0).subscribe(data => {
      this.productRegisterList = data;
      console.log(this.productRegisterList);
    });
    console.log(this.formSearch.value === 0);
  }

  more() {
    // if(this.formSearch ==)
    this.productRegisterServiece.getAllProduct(++this.page).subscribe(data => {
      console.log(data);
      this.dataGet = data;
      console.log(this.dataGet.length);
      if (this.dataGet.length !== 0) {
        this.productRegisterList = this.productRegisterList.concat(data);
      } else {
        this.notLoad = true;
      }
    });
  }

  search() {
    let price1;
    let price2;
    let price;
    price = parseFloat(this.formSearch.value.price);
    // tslint:disable-next-line:no-conditional-assignment
    if (price === 100000) {
      price1 = 0;
      price2 = 100000;
    } else if (price === 500000) {
      price1 = 100000;
      price2 = 500000;
    } else if (price === 1000000) {
      price1 = 500000;
      price2 = 1000000;
    } else if (price === 5000000) {
      price1 = 1000000;
      price2 = 5000000;
    } else {
      price1 = 5000000;
      price2 = 10000000000;
    }
    console.log(price1 + '-' + price2);
    // tslint:disable-next-line:max-line-length
    this.productRegisterServiece.searchByNameCataloguePrice(0, this.formSearch.value.name,
                                                            this.formSearch.value.catalogue,
                                                            price1, price2).subscribe(data => {
      console.log(data);
      this.productRegisterList = data;
      console.log(this.formSearch.value);
    });
  }
}
