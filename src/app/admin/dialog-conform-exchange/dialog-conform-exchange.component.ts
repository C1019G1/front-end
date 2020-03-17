import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BillComponent} from '../../users/bill/bill.component';

@Component({
  selector: 'app-dialog-conform-exchange',
  templateUrl: './dialog-conform-exchange.component.html',
  styleUrls: ['./dialog-conform-exchange.component.css']
})
export class DialogConformExchangeComponent implements OnInit {

  constructor(
    public  dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogConformExchangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  openBill() {
    const dialogRef = this.dialog.open(BillComponent, {
      data: {data1: 'Dialog'},
      disableClose: true
    });
    this.dialogRef.close();
  }

  message() {
    alert('Thao tác này sẽ gửi mail cho người mua để  xác định giao dịch đã thành công');
  }
}
