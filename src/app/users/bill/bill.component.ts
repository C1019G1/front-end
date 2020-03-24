import {Component, Inject, OnInit, ElementRef, ViewChild, Injectable} from '@angular/core';
import {ReadMoneyService} from '../../services/read-money.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
declare const jsPDF: any;

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent implements OnInit {

  public stringMoney;
  public money;

  constructor(
    public readMoney: ReadMoneyService,
    public dialogRef: MatDialogRef<BillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  @ViewChild('tile') tile: ElementRef;
  @ViewChild('info') info: ElementRef;
  @ViewChild('code') code: ElementRef;

  ngOnInit(): void {
    this.money = 1230000;
    this.stringMoney = this.readMoney.docso(this.money);
  }

  // print(): void {
  //   // tslint:disable-next-line:one-variable-per-declaration
  //   let printContents, popupWin;
  //   printContents = document.getElementById('print-section').innerHTML;
  //   popupWin = window.open('', '_blank', 'top=0,left=0,height=500px,width=900px');
  //   popupWin.document.open();
  //   popupWin.document.write(`<html>
  //       <head>
  //         <title style="font-size: 30px;">HÓA ĐƠN BÁN HÀNG</title>
  //         <style>
  //         //........Customized style.......
  //         </style>
  //       </head>
  //   <body onload="window.print();window.close()">${printContents}</body>
  //     </html>`
  //   );
  //   popupWin.document.close();
  //   this.dialogRef.close();
  // }
  exportPDF1() {
    const doc = new jsPDF();
    const tile = this.tile.nativeElement;
    const info = this.info.nativeElement;
    const code = this.code.nativeElement;
    doc.getFontList();
    doc.setFontSize(13);
    doc.setFont('Times-New-Roman', 'normal');
    doc.text(tile.innerText, 60, 15);
    doc.text(info.innerText, 40, 40);
    doc.text(code.innerText, 150, 30);
    doc.autoPrint();
    doc.rect(10, 10, 196, 150, 'S');
    doc.save('test.pdf');

  }

}
