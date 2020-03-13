import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {HistoryRegisterProductService} from '../../services/history-register-product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';


export class HistoryRegisterProductDataSource extends DataSource<any>{
  constructor(
    private historyRegisterProductService: HistoryRegisterProductService,
  ) {
    super();
  }
  connect(): Observable<any> {

    return this.historyRegisterProductService.getAllHistoryRegisterProduct();
  }
  disconnect() {}
}
@Component({
  selector: 'app-history-register-auction',
  templateUrl: './history-register-auction.component.html',
  styleUrls: ['./history-register-auction.component.css']
})
export class HistoryRegisterAuctionComponent implements OnInit {
  public HistoryRegisterProduct;
  displayedColumns: string[] = ['index', 'Id_Product', 'Name_Product', 'product_info', 'start_day', 'end_day', 'status', 'cancel'];
  size: 5;
  pages: [];
  totalPages = 1;
  dataSource = new HistoryRegisterProductDataSource(this.historyRegisterProductService);
  p: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private id: any;
  private product: any;
  private pageClicked = 0;
  constructor(
    public historyRegisterProductService: HistoryRegisterProductService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    // this.paginator._intl.itemsPerPageLabel = 'Hiển thị:';
    // this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    //       const start = page * pageSize + 1;
    //       const end = (page + 1) * pageSize;
    //       return `${start} - ${end} trên ${length}`;
    //     };
    this.activatedRoute.params.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
      this.historyRegisterProductService.getHistoryRegisterProductByUserId(this.id).subscribe(
        data2 => {
          this.dataSource = data2;
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
