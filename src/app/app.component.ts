import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AdvisoryComponent} from './users/advisory/advisory.component';
import {GuideComponent} from './users/guide/guide.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {TokenStorageService} from './services/auth/token-storage.service';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieStorageService} from './services/auth/cookie-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-end';
  username: string;
  roleName: string;
  id: string;
  showLoginBox: boolean;
  showAdminMenu: boolean;
  showUserMenu: boolean;
  constructor(
              public  dialog: MatDialog,
              private cookieStorageService: CookieStorageService,
              // private tokenStorage: TokenStorageService,
  ) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  //  this.getId();
    this.getUsername();
    this.getRoleName();
  }

  getId() {
  //  this.id = this.tokenStorage.getId();
    if (this.id) {
      this.showLoginBox = false;
    } else {
      this.showLoginBox = true;
    }
  }

  getUsername() {
    this.username = this.cookieStorageService.getUsername();
    if (this.username) { this.showLoginBox = false; } else { this.showLoginBox = true ; }
  }
  getRoleName() {
    this.roleName = this.cookieStorageService.getRoleName();
    if (this.roleName === 'ROLE_ADMIN') { this.showAdminMenu = true; } else { this.showAdminMenu = false ; }
    if (this.roleName === 'ROLE_USER' || this.roleName === 'ROLE_MEMBER') { this.showUserMenu = true; } else { this.showUserMenu = false ; }
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
    this.cookieStorageService.signOut();
    this.ngOnInit() ;
  }
}
