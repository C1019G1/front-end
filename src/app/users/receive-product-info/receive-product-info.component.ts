import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageDialogeComponent} from '../../products/message-dialoge/message-dialoge.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BillComponent} from '../bill/bill.component';
import {DialogConformExchangeComponent} from '../../admin/dialog-conform-exchange/dialog-conform-exchange.component';
import {UserProduct} from '../user-check-out/user-check-out.component';

@Component({
  selector: 'app-receive-product-info',
  templateUrl: './receive-product-info.component.html',
  styleUrls: ['./receive-product-info.component.css']
})
export class ReceiveProductInfoComponent implements OnInit {
  public formReceiver: FormGroup;
  public formBuyer: FormGroup;
  public check;
  selectedProducts: UserProduct[];
  paymentMethod = '';

  constructor(
    public dialogRef: MatDialogRef<ReceiveProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public  dialog: MatDialog,
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
    this.formBuyer = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]]
    });
    this.selectedProducts = this.data.selectedProducts;
    this.paymentMethod = this.data.paymentMethod;
    console.log(this.paymentMethod);
    console.log(this.selectedProducts);
  }

  openConformPrint() {
    const dialogRef = this.dialog.open(DialogConformExchangeComponent, {
      width: '450px',
      height: '200px',
      data: {data1: 'Dialog'},
      disableClose: true
    });
  }

}
