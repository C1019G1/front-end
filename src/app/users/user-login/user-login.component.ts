import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../../services/auth/login-info';
import {AuthJwtService} from '../../services/auth/auth-jwt.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  userInfo: AuthLoginInfo;
  constructor(
    private fb: FormBuilder,
    private auth: AuthJwtService,
    private tokenStorage: TokenStorageService,
    public router: Router,
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
        console.log(data.token);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.router.navigateByUrl('/user/hello');
      },
      error => {
        console.log('Error ', error);
      }
    );
  }
}
