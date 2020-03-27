import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AdminExchangeService} from '../../services/admin-exchange.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MessageDeleteTransactionDialogComponent} from '../message-delete-transaction-dialog/message-delete-transaction-dialog.component';

export interface UserTransactionApi {
  content: UserTransactionDTO[];
  totalElements: number;
}
export interface UserTransactionDTO {
  id;
  period;
  successTime;
  buyer;
  seller;
  productName;
  fee;
  price;
  status;
}
@Component({
  selector: 'app-admin-transaction-manager',
  templateUrl: './admin-transaction-manager.component.html',
  styleUrls: ['./admin-transaction-manager.component.css']
})
export class AdminTransactionManagerComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select','id', 'successTime', 'period', 'buyer', 'seller', 'productName',
    'price', 'fee', 'status'];
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
  data: UserTransactionDTO[]=[];
  transactionSelectedList: UserTransactionDTO[] = [];
  selection = new SelectionModel<UserTransactionDTO>(true, []);
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
      console.log(this.data);
      this.selectedTransactionList();
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserTransactionDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  selectedTransactionList(){
    if(this.selection.selected.length!=0) {
      for (let transaction of this.selection.selected) {
        const index = this.transactionSelectedList.findIndex(e => e.id === transaction.id);
        if (index == -1) {
          this.transactionSelectedList.push(transaction);
        }
      }
      this.selection.clear();
    }
  }
  openMessageDeleteDialog() {
    this.selectedTransactionList();
    const dialogRef = this.dialog.open(MessageDeleteTransactionDialogComponent, {
      width: '500px',
      minWidth: '300px',
      position: {top: '5%'},
      disableClose: true,
      data: {transactionSelectedList: this.transactionSelectedList}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngAfterViewInit();
    });

  }
  // deleteTransaction() {
  //   this.selectedTransactionList();
  //   for (let transactionDTO of this.transactionSelectedList){
  //     this.adminExchangeService.delete(transactionDTO.id).subscribe(data => {
  //     });
  //   }
  //   this.ngAfterViewInit();
  // }
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
