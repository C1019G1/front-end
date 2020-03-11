import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    public formBuider: FormBuilder,
     public userService: UserService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.userForm = this.formBuider.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
    ;
  }

  resetPassword() {
    this.userService.resetPassword(this.userForm.value).subscribe(data => {
       this.router.navigateByUrl('/user/login');
    },
      error => {
        alert(error.error) ;
      }, () => {
        alert('mật khẩu mới đã được gửi tới email');
        this.router.navigateByUrl('/user/login');
      }
    );
  }
}
