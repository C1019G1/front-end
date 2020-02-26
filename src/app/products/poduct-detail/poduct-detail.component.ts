import { Component, OnInit } from '@angular/core';

export interface Product {
  ID: string;
  productName: string;
  startDay: string;
  endDay: string;
  remainTime: number;
  originPrince: number;
  currentPrice: number;
  jump: number;
  auctionPrice: number;
  image: string[];
  infoProduct: string;
  address: string;
}

const products: Product[] = [
  {
    ID: '0001',
    productName: 'oto',
    startDay: 'Date1',
    endDay: 'Date2',
    remainTime: 12,
    originPrince: 100,
    currentPrice: 120,
    jump: 10,
    auctionPrice: 120,
    image : ['../assets/hinh1/oto.jpg', '../assets/hinh1/nha.jpg', '../assets/hinh1/moto.jpg', '../assets/hinh1/nha.jpg'],
    infoProduct: 'hàng dân dụng',
    address: 'đà nẵng',
  },
  {
    ID: '0002',
    productName: 'nhà',
    startDay: 'Date1',
    endDay: 'Date2',
    remainTime: 12,
    originPrince: 100,
    currentPrice: 120,
    jump: 10,
    auctionPrice: 120,
    image : ['../assets/hinh1/nha.jpg', '../assets/hinh1/nha.jpg', '../assets/hinh1/nha.jpg', '../assets/hinh1/nha.jpg'],
    infoProduct: 'hàng dân dụng',
    address: 'đà nẵng',
  },
  {
    ID: '0003',
    productName: 'moto',
    startDay: 'Date1',
    endDay: 'Date2',
    remainTime: 12,
    originPrince: 100,
    currentPrice: 120,
    jump: 10,
    auctionPrice: 120,
    image : ['../assets/hinh1/moto.jpg', '../assets/hinh1/moto.jpg', '../assets/hinh1/moto.jpg', '../assets/hinh1/moto.jpg'],
    infoProduct: 'hàng dân dụng',
    address: 'đà nẵng',
  },
  {
    ID: '0004',
    productName: 'iphone',
    startDay: 'Date1',
    endDay: 'Date2',
    remainTime: 12,
    originPrince: 100,
    currentPrice: 120,
    jump: 10,
    auctionPrice: 120,
    image : ['assets/hinh1/iphone.jpg', 'assets/hinh1/iphone.jpg', 'assets/hinh1/iphone.jpg', 'assets/hinh1/iphone.jpg'],
    infoProduct: 'hàng dân dụng',
    address: 'đà nẵng',
  },
  {
    ID: '0005',
    productName: 'oto',
    startDay: 'Date1',
    endDay: 'Date2',
    remainTime: 12,
    originPrince: 100,
    currentPrice: 120,
    jump: 10,
    auctionPrice: 120,
    image : ['../assets/hinh1/oto.jpg', '../assets/hinh1/oto.jpg', '../assets/hinh1/oto.jpg', '../assets/hinh1/oto.jpg'],
    infoProduct: 'hàng dân dụng',
    address: 'đà nẵng',
  }
];
@Component({
  selector: 'app-poduct-detail',
  templateUrl: './poduct-detail.component.html',
  styleUrls: ['./poduct-detail.component.css']
})
export class PoductDetailComponent implements OnInit {
  public productList;
  constructor() { }

  ngOnInit(): void {
    this.productList = products;
  }

}
