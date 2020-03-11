import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Product {
  idProduct: number;
  nameProduct: string;
  infoProduct: string;
  originalCost: string;
  currentCost: string;
  registerDay: string;
  status: string;
}

const ProductList: Product[] = [
  {
    idProduct: 1001,
    nameProduct: 'Iphone X',
    infoProduct: 'điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1002,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1003,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1004,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1005,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1006,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1007,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1008,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1009,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 10,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    originalCost: '15.000.000',
    currentCost: '17.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
];

@Component({
  selector: 'app-history-auction',
  templateUrl: './history-auction.component.html',
  styleUrls: ['./history-auction.component.css']
})

export class HistoryAuctionComponent implements OnInit {

  displayedColumns: string[] = ['index', 'idProduct', 'nameProduct', 'infoProduct',
    'originalCost', 'currentCost', 'registerDay', 'status', 'cancel'];
  dataSource = new MatTableDataSource<Product>(ProductList);
  p: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  $index: number;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
