import {Component, Inject, OnInit} from '@angular/core';
import {ReadMoneyService} from '../../services/read-money.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  public money;

  constructor(
    public readMoney: ReadMoneyService,
    public dialogRef: MatDialogRef<BillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.money = this.readMoney.docso(98761000);
    console.log(this.readMoney.docso(1234567890));
  }

  print(): void {
    // tslint:disable-next-line:one-variable-per-declaration
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=500px,width=900px');
    popupWin.document.open();
    popupWin.document.write(`<html>
        <head>
          <title style="font-size: 30px;">HÓA ĐƠN BÁN HÀNG</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
    this.dialogRef.close();
  }

}
