import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BillComponent} from '../../users/bill/bill.component';
import {BuyerDTO, ProductForBill} from '../../users/receive-product-info/receive-product-info.component';
import {UserService} from '../../services/user.service';
import {MessageSuccessfulTransactionDialogComponent} from '../message-successful-transaction-dialog/message-successful-transaction-dialog.component';
import {AdminExchangeService} from '../../services/admin-exchange.service';

@Component({
  selector: 'app-dialog-conform-exchange',
  templateUrl: './dialog-conform-exchange.component.html',
  styleUrls: ['./dialog-conform-exchange.component.css']
})
export class DialogConformExchangeComponent implements OnInit {
  public productListForBill: ProductForBill[];
  public customerInfo: BuyerDTO;
  private money: number=0;
  private productName: string ='';
  private transactionID: number;
  constructor(
    public  dialog: MatDialog,
    public userService: UserService,
    public dialogRef: MatDialogRef<DialogConformExchangeComponent>,
    public adminExchangeService: AdminExchangeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.productListForBill = this.data.productListForBill;
    this.customerInfo = this.data.customerInfo;
    console.log(this.data.productListForBill);
    console.log(this.customerInfo);
    for (let productBill of this.productListForBill){
      this.transactionID = productBill.transactionId;
      this.adminExchangeService.updateUserTransaction(this.transactionID).subscribe(value => {console.log(value)});
    }

  }

  openBill() {
    const dialogRef = this.dialog.open(BillComponent, {
      data: {productListForBill: this.productListForBill,customerInfo:this.customerInfo},
      disableClose: true
    })
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(result => {
    });
    this.sendEmailToCustomer()
  }
  sendEmailToCustomer() {
    const email =this.customerInfo.buyerEmail;
    for (let productForBill of this.productListForBill){
      this.money += productForBill.price+productForBill.fee;
      this.productName += productForBill.productName+', ';
    }
    if(email !==null){
      this.userService.sendEmailtoSeller(email,this.productName,this.money).subscribe(result =>{});
    }
    const dialogRef = this.dialog.open(MessageSuccessfulTransactionDialogComponent, {
      width: '400px',
      height: '200px',
      disableClose: true
    })
    this.dialogRef.close();
  }


}
