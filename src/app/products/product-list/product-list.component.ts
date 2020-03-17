import {Component, OnInit} from '@angular/core';
import {ProductRegisterService} from '../../services/product-register.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {GuideComponent} from '../../users/guide/guide.component';
import {MessageDialogeComponent} from '../message-dialoge/message-dialoge.component';

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
  private price1;
  private price2;
  private price;
  private catalogue?: string;
  public message;

  constructor(public productRegisterServiece: ProductRegisterService,
              public  dialog: MatDialog,
              public formBuilder: FormBuilder,
              public activeedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      name: [''],
      catalogue: [''],
      price: [''],
    });
    this.activeedRoute.params.subscribe(data => {
      if (data.catalogue == null) {
        this.catalogue = '';
      } else {
        this.catalogue = data.catalogue;
      }
    });
    console.log('catalogue: ' + this.catalogue);
    this.findAll(this.catalogue);
  }

  findAll(catalogue: string) {
    this.notLoad = false;
    this.productRegisterServiece.getAllProduct(0, catalogue).subscribe(data => {
      this.productRegisterList = data;
      console.log(this.productRegisterList);
    });
  }

  more() {
    const searchStatus = this.formSearch.value.name === '' &&
      this.formSearch.value.catalogue === '' &&
      this.formSearch.value.price === '';
    console.log('trang thai: ' + searchStatus);
    if (searchStatus) {
      this.moreAll();
    } else {
      this.moreSearch();
    }
  }

  search() {
    this.notLoad = false;
    const searchStatus = this.formSearch.value.name === '' &&
      this.formSearch.value.catalogue === '' &&
      this.formSearch.value.price === '';
    if (searchStatus) {
      this.findAll(this.catalogue);
    } else {
      console.log('name=' + this.formSearch.value.name +
        'catalogue=' + this.formSearch.value.catalogue +
        'price' + this.formSearch.value.price);
      this.page = 0;
      this.notLoad = false;
      this.price = parseFloat(this.formSearch.value.price);
      if (this.price === 100000) {
        this.price1 = 0;
        this.price2 = 100000;
      } else if (this.price === 500000) {
        this.price1 = 100000;
        this.price2 = 500000;
      } else if (this.price === 1000000) {
        this.price1 = 500000;
        this.price2 = 1000000;
      } else if (this.price === 5000000) {
        this.price1 = 1000000;
        this.price2 = 5000000;
      } else if (this.price === 10000000) {
        this.price1 = 5000000;
        this.price2 = 10000000000;
      } else {
        this.price1 = 0;
        this.price2 = 20000000000;
      }
      console.log('price1= ' + this.price1 + 'price2= ' + this.price2);
      this.productRegisterServiece.searchByNameCataloguePrice(this.page, this.formSearch.value.name,
        this.formSearch.value.catalogue,
        this.price1,
        this.price2).subscribe(data => {
        this.productRegisterList = data;
        if ( this.productRegisterList.length === 0) {
          this.message = 'Rất tiếc không tìm thấy sản phẩm theo bạn mong muốn!!!';
          this.notLoad = true;
        } else {
          this.message = '';
        }
        console.log('du lieu: ' + data);
      });
    }
  }

  moreAll() {
    this.notLoad = false;
    this.productRegisterServiece.getAllProduct(++this.page, this.catalogue).subscribe(data => {
      console.log('catalogue:' + this.catalogue);
      this.dataGet = data;
      console.log('chieu dai lengh: ' + this.dataGet.length);
      if (this.dataGet.length !== 0) {
        this.productRegisterList = this.productRegisterList.concat(data);
      } else {
        this.notLoad = true;
        this.openDialogMessage();
      }
    });
  }

  moreSearch() {
    this.notLoad = false;
    this.productRegisterServiece.searchByNameCataloguePrice(++this.page, this.formSearch.value.name,
      this.formSearch.value.catalogue,
      this.price1, this.price2).subscribe(data => {
      console.log('du lieu xuong: ' + data);
      this.dataGet = data;
      console.log('chieu dai lengh: ' + this.dataGet.length);
      if (this.dataGet.length !== 0) {
        this.productRegisterList = this.productRegisterList.concat(data);
        console.log('du lieu show: ' + data);
      } else {
        this.notLoad = true;
        this.openDialogMessage();
      }
    });
  }
  openDialogMessage() {
    this.dialog.open(MessageDialogeComponent, {
      data: {data1: 'Dialog'},
      disableClose: false
    });
  }
}
