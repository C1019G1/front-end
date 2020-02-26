import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuider: FormBuilder,
    // public userService: any,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]],
    })
    ;
  }

  userLogin() {
    // this.userService.login(this.formUser.value).subscribe(data => {
    //   this.router.navigateByUrl('customer-list');
    // });
  }
}
