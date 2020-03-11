import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {HistoryRegisterProductService} from '../../services/history-register-product.service';
import {ActivatedRoute} from '@angular/router';


export interface ProductDTO {
  Id_Product: number;
  Name_Product: string;
  product_info: string;
  end_day: Date;
  start_day: Date;
  status: string;
  Current_Price: number;
}
@Component({
  selector: 'app-history-register-auction',
  templateUrl: './history-register-auction.component.html',
  styleUrls: ['./history-register-auction.component.css']
})
export class HistoryRegisterAuctionComponent implements OnInit {
  displayedColumns: string[] = ['index', 'Id_Product', 'Name_Product', 'product_info', 'start_day', 'end_day', 'status', 'cancel'];
  data: ProductDTO[] = [];
  historyRegisterProductDTO: ProductDTO;
  size: 5;
  pages: [];
  totalPages = 1;
  dataSource = new MatTableDataSource<ProductDTO>();
  p: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private id: any;
  private product: any;
  private pageClicked = 0;
  constructor(
    public historyRegisterProductService: HistoryRegisterProductService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
      this.historyRegisterProductService.getHistoryRegisterProductByUserId(this.id).subscribe(
        data2 => {
          for ( const element of data2) {
          console.log(data2);
          }
          // this.dataSource = data2.content;
          // this.totalPages = data2.totalPages;
          // this.dataSource = data2.content;
          // this.totalPages = data2.totalPages;
          // this.pages = Array.apply(null, {length: this.totalPages}).map(Number.call, Number);
          // this.dataSource.paginator = this.paginator;
        });
  });
}


  // onSubmit(page) {
  //   this.historyRegisterProductService.getHistoryRegisterProductByUserId(this.id, this.pages, this.size).subscribe(
  //     data => {
  //       this.pageClicked = page;
  //       this.dataSource = data.content;
  //       this.totalPages = data.totalPages;
  //       this.pages = Array.apply(null, {length: this.totalPages}).map(Number.call, Number);
  //       this.dataSource.paginator = this.paginator;
  //       console.log(this.dataSource);
  //     }
  //   );
  // }
}
