import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../services/auth/login-info';
import {AuthJwtService} from '../../services/auth/auth-jwt.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {AppComponent} from '../../app.component';

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
  constructor(
    private fb: FormBuilder,
    private auth: AuthJwtService,
    private tokenStorage: TokenStorageService,
    public router: Router,
    public appComponent: AppComponent
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
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        console.log(data.token);
        console.log(data.username);
        console.log(data.rolename);
        this.tokenStorage.saveRoleName(data.rolename);
        this.appComponent.ngOnInit();
        this.router.navigateByUrl('/product/list');
      },
      error => {
        alert('thông tin bạn nhập không chính xác , vui lòng nhập lại !!!') ;
      }
    );
  }
}
