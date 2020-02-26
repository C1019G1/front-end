import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  maxDate = new Date();
  minDate = new Date(1900, 0, 1);

  constructor(
    public formBuider: FormBuilder,
    // public userService: any,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuider.group({
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))([0-9]{7})$')]],
      customerType: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      address: ['', [Validators.required]],
      pwGroup: this.formBuider.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
    })
    ;
  }

  userRegister() {
    // this.userService.register(this.formUser.value).subscribe(data => {
    //   this.router.navigateByUrl('customer-list');
    // });
  }
}
