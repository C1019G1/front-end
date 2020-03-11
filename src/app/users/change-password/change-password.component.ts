import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthLoginInfo} from '../../services/auth/login-info';
import {AuthJwtService} from '../../services/auth/auth-jwt.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthJwtService,
    private tokenStorage: TokenStorageService,
    public router: Router,
    public appComponent: AppComponent,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      username: ['', [Validators.required]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.changePassword();
  }
  public changePassword() {
    this.userService.changePassword(this.changePasswordForm.value).subscribe(
      data => {
      },
      error => {
        alert(error.error) ;
      }, () => {
        alert('mật khẩu đã được thay đổi');
        this.tokenStorage.signOut();
        this.router.navigateByUrl('/user/login');
      }
    );
  }
}
