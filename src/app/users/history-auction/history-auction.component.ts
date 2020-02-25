import {Component, OnInit} from '@angular/core';

export interface Product {
  idProduct: number;
  nameProduct: string;
  infoProduct: string;
  cost: string;
  registerDay: string;
  status: string;
}

const ELEMENT_DATA: Product[] = [
  {
    idProduct: 1001,
    nameProduct: 'Iphone X',
    infoProduct: 'điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1002,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1003,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1004,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1005,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1006,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1007,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1008,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 1009,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 10,
    nameProduct: 'Iphone X',
    infoProduct: 'Điện thoại',
    cost: '15.000.000',
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
  displayedColumns: string[] = ['index', 'idProduct', 'nameProduct', 'infoProduct', 'cost', 'registerDay', 'status'];
  dataSource = ELEMENT_DATA;
  p: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
