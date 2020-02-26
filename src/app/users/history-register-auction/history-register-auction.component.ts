import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface Product {
  idProduct: number;
  nameProduct: string;
  infoProduct: string;
  registerDay: string;
  status: string;
}
const ProductList: Product[] = [
  {
    idProduct: 1,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 2,
    nameProduct: 'MacBook Ari',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 3,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 4,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 5,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 6,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  },
  {
    idProduct: 7,
    nameProduct: 'MacBook Pro',
    infoProduct: 'Máy tính',
    registerDay: '25/02/2020',
    status: 'Đang đấu giá'
  }
]
@Component({
  selector: 'app-history-register-auction',
  templateUrl: './history-register-auction.component.html',
  styleUrls: ['./history-register-auction.component.css']
})
export class HistoryRegisterAuctionComponent implements OnInit {
  displayedColumns: string[] = ['idProduct', 'nameProduct', 'infoProduct', 'registerDay', 'status', 'cancel'];
  dataSource = new MatTableDataSource<Product>(ProductList);
  p: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
