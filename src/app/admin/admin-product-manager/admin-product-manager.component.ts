import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfileDTO} from '../admin-user-manager/admin-user-manager.component';
import {HistoryRegisterProductService} from '../../services/history-register-product.service';
import {Observable} from 'rxjs';
import {AdminUserListService} from '../../services/admin-user-list.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


export interface AdminProductManagerAPI {
  content: AdminProductManagerDTO[];
  totalElements: number;
}

export interface AdminProductManagerDTO {
  productId;
  nameProduct;
  catalogue;
  username;
  price1;
  price2;
  status;
  productInfo;
  img;
}

@Component({
  selector: 'app-admin-product-manager',
  templateUrl: './admin-product-manager.component.html',
  styleUrls: ['./admin-product-manager.component.css']
})
export class AdminProductManagerComponent implements OnInit {
  dataSource: AdminProductManagerDTO[] = [];
  data: AdminProductManagerDTO;
  displayedColumns: string[] = ['productId', 'nameProduct' , 'catalogue', 'username',
    'startPrice', 'status', 'productInfo', 'edit'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  formSearch: FormGroup;
  notLoad = false;
  price1: number;
  price2: number;
  public message;
  public dataGet: [];
  constructor(
    private formBuilder: FormBuilder,
    private adminUserListService: AdminUserListService
  ) {
  }
  pageIndex = 0;
  length = 100;
  pageSize = 2;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  ngOnInit(): void {
    this.findAll();
    this.formSearch = this.formBuilder.group({
        name: [''],
        userName: [''],
        catalogue: [''],
        price1: [''],
        price2: [''],
        status: [''],
      });
  }
  findAll() {
    this.adminUserListService.getProductManager(this.pageIndex, this.pageSize).subscribe(data => {
      this.dataSource = data;
    });
  }
  more() {
    const searchStatus = this.formSearch.value.name === '' &&
      this.formSearch.value.catalogue === '' &&
      this.formSearch.value.userName === '' &&
      this.formSearch.value.price1 === '' &&
      this.formSearch.value.price2 === '' &&
      this.formSearch.value.status === '';
    // console.log('trang thai: ' + searchStatus);
    if (searchStatus) {
      this.moreAll();
    } else {
      this.moreSearch();
    }
  }

  moreAll() {
    this.notLoad = false;
    this.adminUserListService.getProductManager(this.pageIndex, this.pageSize).subscribe(data => {
      // console.log('catalogue:' + this.catalogue);
      this.dataGet = data;
      // console.log('chieu dai lengh: ' + this.dataGet.length);
      if (this.dataGet.length !== 0) {
        this.dataSource = this.dataSource.concat(data);
      } else {
        this.notLoad = true;
        // this.openDialogMessage();
      }
    });
  }

  moreSearch() {
    this.notLoad = false;
    this.adminUserListService.searchByNameProductAndCatalogueAndUserNameAndPriceAndStatus(this.pageIndex, this.pageSize, this.formSearch.value.name,
      this.formSearch.value.catalogue,
      this.formSearch.value.userName,
      this.formSearch.value.price1,
      this.formSearch.value.price2,
      this.formSearch.value.status).subscribe(data => {
      // console.log('du lieu xuong: ' + data);
      this.dataGet = data;
      // console.log('chieu dai lengh: ' + this.dataGet.length);
      if (this.dataGet.length !== 0) {
        this.dataSource = this.dataSource.concat(data);
        // console.log('du lieu show: ' + data);
      } else {
        this.notLoad = true;
        // this.openDialogMessage();
      }
    });
  }

  search() {
    this.notLoad = false;
    const searchStatus = this.formSearch.value.name === '' &&
      this.formSearch.value.catalogue === '' &&
      this.formSearch.value.userName === '' &&
      this.formSearch.value.price1 === '' &&
      this.formSearch.value.price2 === '' &&
      this.formSearch.value.status === '';
    if (searchStatus) {
      this.findAll();
    } else {
      this.notLoad = false;
      // tslint:disable-next-line:max-line-length
      this.adminUserListService.searchByNameProductAndCatalogueAndUserNameAndPriceAndStatus(this.pageIndex, this.pageSize, this.formSearch.value.name,
        this.formSearch.value.catalogue,
        this.formSearch.value.userName,
        this.formSearch.value.price1,
        this.formSearch.value.price2,
        this.formSearch.value.status).subscribe(data => {
        this.dataSource = data;
        if ( this.dataSource.length === 0) {
          this.message = 'Rất tiếc không tìm thấy sản phẩm theo bạn mong muốn!!!';
          this.notLoad = true;
        } else {
          this.message = '';
        }
        console.log('du lieu: ' + data);
      });
    }
  }

  openUserLockDialog() {
  }

  openUserDeleteDialog() {
  }
}
