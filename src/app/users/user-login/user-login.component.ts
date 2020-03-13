import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../services/auth/login-info';
import {AuthJwtService} from '../../services/auth/auth-jwt.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {AppComponent} from '../../app.component';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  loginForm: FormGroup;
  submitted = false;
  userInfo: AuthLoginInfo;
  cookieExpireTime = 0;
  isRememberMe: boolean;
  constructor(
    private fb: FormBuilder,
    private auth: AuthJwtService,
    public router: Router,
    public appComponent: AppComponent,
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.userInfo = new AuthLoginInfo(this.fusername.value, this.fpassword.value);
    this.login(this.userInfo);
  }

  get fusername() {
    return this.loginForm.get('username');
  }
  get fpassword() {
    return this.loginForm.get('password');
  }
  public login(userInfo) {
    this.auth.attemptAuth(userInfo).subscribe(
      data => {
        if (this.isRememberMe) {
          this.cookieExpireTime = 1;
        }
        this.cookieStorageService.saveToken(data.token, this.cookieExpireTime);
        this.cookieStorageService.saveUsername(data.username, this.cookieExpireTime);
        this.cookieStorageService.saveRoleName(data.rolename, this.cookieExpireTime);
        this.appComponent.ngOnInit();
        this.router.navigateByUrl('/product/list');
      },
      error => {
        alert(error.error) ;
      }
    );
  }
}
