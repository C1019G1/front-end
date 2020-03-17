import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface ProductManagerDTO {
  idProduct: number;
  nameProduct: string;
  catalogue: string;
  userName: string;
  startPrice: number;
  browseStatus: string;
  status: string;
  productInfo: string;
}

const Product: ProductManagerDTO[] = [
  {
    idProduct: 1,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 2,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 3,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 4,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 5,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 6,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 7,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },
  {
    idProduct: 8,
    nameProduct: 'Điện thoại Iphone X',
    catalogue: 'Công nghệ',
    userName: 'thanh123',
    startPrice: 15000000,
    browseStatus: 'Đang chờ duyệt',
    status: 'Chưa đấu giá',
    productInfo: 'Bảo hành 1 năm'
  },

];

@Component({
  selector: 'app-admin-product-manager',
  templateUrl: './admin-product-manager.component.html',
  styleUrls: ['./admin-product-manager.component.css']
})
export class AdminProductManagerComponent implements OnInit {
  resultsLength: any;
  formSearch: any;
  displayedColumns: string[] = ['idProduct', 'nameProduct', 'catalogue',
    'userName', 'startPrice', 'browseStatus', 'status', 'productInfo'];
  dataSource = new MatTableDataSource<ProductManagerDTO>(Product);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openUserLockDialog() {
  }

  openUserDeleteDialog() {
  }

  openUserCreateDialog() {
  }
}
