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
  private money: number=0;
  private productName: string ='';
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
    console.log(this.data.productListForBill);
    console.log(this.customerInfo);
  }

  openBill() {
    const dialogRef = this.dialog.open(BillComponent, {
      data: {productListForBill: this.productListForBill,customerInfo:this.customerInfo},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  sendEmail() {
    const email =this.customerInfo.buyerEmail;
    for (let productForBill of this.productListForBill){
      this.money += productForBill.price+productForBill.fee;
      this.productName += productForBill.productName+', ';
    }
    if(email !==null){
      this.userService.sendEmailtoSeller(email,this.productName,this.money).subscribe(result =>{});
      alert('Cảm ơn bạn đã thanh toán hóa đơn!Bạn kiểm tra email để biết thông tin của hóa đơn '+email+typeof this.productName+typeof this.money);
    }

  }
}
