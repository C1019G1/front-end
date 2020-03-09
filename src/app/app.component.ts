import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AdvisoryComponent} from './users/advisory/advisory.component';
import {GuideComponent} from './users/guide/guide.component';
import {ProductListComponent} from './products/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-end';
  constructor(
              public  dialog: MatDialog
  ) { }
  openDialogAdvisory() {
    this.dialog.open(AdvisoryComponent, {
      data: {data1: 'Dialog'},
      disableClose: true
    });
  }
  openDialogGuide() {
    this.dialog.open(GuideComponent, {
      width: '600px',
      height: '600px',
      data: {data1: 'Dialog'},
      disableClose: true
    });
  }
}
