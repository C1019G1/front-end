import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AdminExchangeService} from '../../services/admin-exchange.service';
import {UserProfileDTO} from '../admin-user-manager/admin-user-manager.component';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

export interface UserTransactionApi {
  content: UserTransactionDTO[];
  totalElements: number;
}
export interface UserTransactionDTO {
  id: number;
  period: Date;
  successTime: Date;
  buyer: string;
  seller: string;
  productName: string;
  fee: number;
  price: number;
  status: string
}
@Component({
  selector: 'app-admin-transaction-manager',
  templateUrl: './admin-transaction-manager.component.html',
  styleUrls: ['./admin-transaction-manager.component.css']
})
export class AdminTransactionManagerComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'successTime', 'period', 'buyer', 'seller', 'productName',
    'price', 'fee', 'status', 'delete'];
  userTransactionDTO: UserTransactionDTO;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  formTransactionSearch: FormGroup;
  buyer: string;
  seller: string;
  productName: string;
  dateSt: string;
  date: Date;
  status: string;
  statusFormSearch: boolean = true;
  firstDateSt: string;
  lastDateSt: string;
  year: number;
  public data: UserTransactionDTO[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private adminExchangeService: AdminExchangeService
  ) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Hiển thị:';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} trên ${length}`;
    };
    this.formTransactionSearch = this.formBuilder.group({
      buyer: [''],
      seller: [''],
      productName: [''],
      date: [''],
      status:['']
    });

  }
  ngAfterViewInit(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          if (this.statusFormSearch){
            return this.adminExchangeService.getUserTransactionList(this.paginator.pageIndex, this.paginator.pageSize);
          }else {
            return this.adminExchangeService.searchUserTransaction(this.paginator.pageIndex, this.paginator.pageSize,
              this.buyer,this.seller,this.productName,this.firstDateSt,this.lastDateSt,this.status);
          }

        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.totalElements;
          return data.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

  search() {
    this.buyer = this.formTransactionSearch.value.buyer;
    this.seller = this.formTransactionSearch.value.seller;
    this.productName = this.formTransactionSearch.value.productName;
    this.date = new Date(this.formTransactionSearch.value.date);
    this.dateSt = this.formTransactionSearch.value.date.toString();
    console.log(this.date);
    if(this.dateSt==''){
      this.firstDateSt = this.stringDate(new Date('2000-01-01T00:00:00.000Z'));
      this.lastDateSt = this.stringDate(new Date('2050-01-01T00:00:00.000Z'));
    }else {
      this.firstDateSt = this.stringDate(this.date);
      this.lastDateSt = this.stringDate(this.addDays(this.date,1));
    }
    console.log('firtDate: '+ this.firstDateSt);
    console.log('lastDate: ' + this.lastDateSt);
    this.status = this.formTransactionSearch.value.status;
    this.statusFormSearch = this.buyer == ""&& this.seller ==""&& this.productName ==""&&this.dateSt ==''&& this.status=="";
    console.log('statusSearch:'+this.statusFormSearch);
    this.ngAfterViewInit();
  }

  stringDate (date:Date) {
    const year = "" + date.getFullYear();
    let month = "" + (date.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    let day = "" + date.getDate(); if (day.length == 1) { day = "0" + day; }
    let second = "" + date.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + "00:00:00.000000";
  }

  addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  }

}
