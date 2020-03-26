import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageDialogeComponent} from '../../products/message-dialoge/message-dialoge.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BillComponent} from '../bill/bill.component';
import {DialogConformExchangeComponent} from '../../admin/dialog-conform-exchange/dialog-conform-exchange.component';
import {UserProduct} from '../user-check-out/user-check-out.component';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';
import {UserService} from '../../services/user.service';
import {UserProfileDTO} from '../../admin/admin-user-manager/admin-user-manager.component';
import {ProductInfor} from '../../products/product-update/product-update.component';
import {Observable} from 'rxjs';

export interface BuyerDTO {
  idBuyer: number;
  buyerName: string;
  buyerEmail: string;
  buyerAddress: string;
  buyerPhoneNumber: string;
}

export interface ProductForBill {
  productId: number;
  productName: string;
  price: number;
  fee: number;
  note: string;
  paymentMethod: string;
  sellerName: string;
}

@Component({
  selector: 'app-receive-product-info',
  templateUrl: './receive-product-info.component.html',
  styleUrls: ['./receive-product-info.component.css']
})
export class ReceiveProductInfoComponent implements OnInit {
  public formReceiver: FormGroup;
  public check = false;
  public selectedProducts: UserProduct[];
  public paymentMethod = '';
  public buyerDTO: BuyerDTO;
  public productListForBill: ProductForBill[]=[];
  public productForBill: ProductForBill;
  public customerInfo: BuyerDTO;
  public address: string;

  constructor(
    public dialogRef: MatDialogRef<ReceiveProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public formBuilder: FormBuilder,
    public  dialog: MatDialog,
    public userService: UserService,
    public cookieStorageService: CookieStorageService,
  ) {
  }

  ngOnInit(): void {

    this.formReceiver = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      street: [''],
      village: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      district: ['', [Validators.required]],
      province: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
    });
    const userName = this.cookieStorageService.getUsername();
    this.userService.getInforUser(userName).subscribe(data => {
      this.buyerDTO = data;
    });

    this.selectedProducts = this.data.selectedProducts;
    this.paymentMethod = this.data.paymentMethod;
    console.log(this.paymentMethod);
    console.log(this.selectedProducts);
    for (let product of this.selectedProducts){
      this.productForBill = { productId: product.productId,productName: product.productName,price: product.price,fee:product.fee,note: 'Đã thanh toán',paymentMethod: this.paymentMethod, sellerName:product.seller};
      this.productListForBill.push(this.productForBill);
    }
  }

  openConformPrint() {
    console.log(this.check);
    this.address = this.formReceiver.value.street + '-' + this.formReceiver.value.ward + '-' + this.formReceiver.value.village + '-' + this.formReceiver.value.district + '-' + this.formReceiver.value.province;
    if (this.check == false) {
      this.customerInfo = {
        idBuyer: this.buyerDTO.idBuyer,
        buyerName: this.formReceiver.value.fullName,
        buyerEmail: this.formReceiver.value.email,
        buyerAddress: this.address,
        buyerPhoneNumber: this.formReceiver.value.phoneNumber
      };
    } else {
      this.customerInfo = this.buyerDTO;
    }
    console.log(this.customerInfo);
    console.log(this.productListForBill);
    const dialogRef = this.dialog.open(DialogConformExchangeComponent, {
      width: '450px',
      height: '200px',
      data: {productListForBill:this.productListForBill,customerInfo:this.customerInfo},
      disableClose: true
    })
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(result => {
    });

  }

}
