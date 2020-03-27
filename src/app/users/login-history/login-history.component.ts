import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {UserService} from '../../services/user.service';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.css']
})
export class LoginHistoryComponent implements OnInit {
  data: any;
  private username: string;
  public loginHistoryList: any;

  constructor(
    private cookieStorageService: CookieStorageService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
   this.username = this.cookieStorageService.getUsername();
   this.userService.getLoginHistory(this.username).subscribe(data => {
     this.loginHistoryList = data;
     console.log(this.loginHistoryList);
   });
  }

}
