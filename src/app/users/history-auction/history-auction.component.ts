import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HistoryAuctionProductService} from '../../services/history-auction-product.service';


export class HistoryAuctionProductDataSource extends DataSource<any> {

  constructor(
    private historyAuctionProductService: HistoryAuctionProductService,
  ) {
    super();
  }
  connect(): Observable<any> {

    return this.historyAuctionProductService.getAllHistoryAuctionProduct();
  }
  disconnect() {}
}

@Component({
  selector: 'app-history-auction',
  templateUrl: './history-auction.component.html',
  styleUrls: ['./history-auction.component.css']
})

export class HistoryAuctionComponent implements OnInit {

  displayedColumns: string[] = ['index', 'Id_Product', 'Name_Product', 'product_info',
    'start_price', 'start_day', 'end_day', 'status', 'cancel'];
  dataSource = new HistoryAuctionProductDataSource(this.historyAuctionProductService);
  size: 5;
  pages: [];
  totalPages = 1;
  p: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private id: any;
  private product: any;
  private pageClicked = 0;
  constructor(
    public historyAuctionProductService: HistoryAuctionProductService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
      this.historyAuctionProductService.getHistoryAuctionProductByUserId(this.id).subscribe(
        data2 => {
          this.dataSource = data2;
          console.log(this.dataSource);
        });
    });
  }
}
