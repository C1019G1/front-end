import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {UserService} from '../../services/user.service';

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
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
   this.username = this.tokenStorage.getUsername();
   this.userService.getLoginHistory(this.username).subscribe(data => {
     this.loginHistoryList = data;
     console.log(this.loginHistoryList);
   });
  }

}
