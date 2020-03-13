import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {HistoryRegisterProductService} from '../../services/history-register-product.service';
import {Observable} from 'rxjs';
import {HistoryRegisterProductDataSource} from '../history-register-auction/history-register-auction.component';
import {ActivatedRoute, Router} from '@angular/router';


export class HistoryAuctionProductDataSource extends DataSource<any> {

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
  selector: 'app-history-auction',
  templateUrl: './history-auction.component.html',
  styleUrls: ['./history-auction.component.css']
})

export class HistoryAuctionComponent implements OnInit {

  displayedColumns: string[] = ['index', 'idProduct', 'nameProduct', 'infoProduct',
    'originalCost', 'currentCost', 'registerDay', 'status', 'cancel'];
  dataSource = new HistoryAuctionProductDataSource(this.historyRegisterProductService);
  public HistoryRegisterProduct;
  size: 5;
  pages: [];
  totalPages = 1;
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
    this.activatedRoute.params.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
      this.historyRegisterProductService.getHistoryAuctionProductByUserId(this.id).subscribe(
        data2 => {
          this.dataSource = data2;
        });
    });
  }
}
