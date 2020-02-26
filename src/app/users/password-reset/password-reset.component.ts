import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    public formBuider: FormBuilder,
    // public userService: any,
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
    // this.userService.login(this.formUser.value).subscribe(data => {
    //   this.router.navigateByUrl('customer-list');
    // });
  }
}
