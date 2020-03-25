import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BillComponent} from '../../users/bill/bill.component';
import {BuyerDTO, ProductForBill} from '../../users/receive-product-info/receive-product-info.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-dialog-conform-exchange',
  templateUrl: './dialog-conform-exchange.component.html',
  styleUrls: ['./dialog-conform-exchange.component.css']
})
export class DialogConformExchangeComponent implements OnInit {
  public productListForBill: ProductForBill[];
  public customerInfo: BuyerDTO;
  constructor(
    public  dialog: MatDialog,
    public userService: UserService,
    public dialogRef: MatDialogRef<DialogConformExchangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.productListForBill = this.data.productListForBill;
    this.customerInfo = this.data.customerInfo;
    console.log('namecustomer1111111:'+ this.customerInfo.buyerName);
  }

  openBill() {
    const dialogRef = this.dialog.open(BillComponent, {
      width: '700px',
      height: '500px',
      data: {productListForBill: this.productListForBill,customerInfo:this.customerInfo},
      disableClose: true
    });
    this.dialogRef.close();
  }

  sendEmail() {
    const email =this.customerInfo.buyerEmail;
    const productname =this.productListForBill[0].productName;
    const price = this.productListForBill[0].price;
  this.userService.sendEmailtoSeller(email,productname,price).subscribe(result =>{

  });
    alert('Cảm ơn bạn đã thanh toán hóa đơn!Bạn kiểm tra email để biết thông tin của hóa đơn ');
  }
}
