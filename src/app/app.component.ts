import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AdvisoryComponent} from './users/advisory/advisory.component';
import {GuideComponent} from './users/guide/guide.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {TokenStorageService} from './services/auth/token-storage.service';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-end';
  username: String;
  showLoginBox: boolean;
  constructor(
              public  dialog: MatDialog,
              private tokenStorage: TokenStorageService,
  ) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
   this.getUsername();
  }
  getUsername() {
    this.username = this.tokenStorage.getUsername();
    if (this.username) { this.showLoginBox = false; } else { this.showLoginBox = true ; }
  }
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

  logOut() {
    this.tokenStorage.signOut();
    this.ngOnInit() ;
  }
}
