import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {absoluteFromSourceFile} from '@angular/compiler-cli/src/ngtsc/file_system';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v._password === v.confirmPassword) ? null : {
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
  private password: AbstractControl;

  constructor(
    public formBuider: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuider.group({
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dayOfBirth: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))([0-9]{7})$')]],
      customerType: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      password : ['', []],
      address: ['', [Validators.required]],
      pwGroup: this.formBuider.group({
        _password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
    })
    ;
  }

  userRegister() {
    this.password = this.registerForm.get('pwGroup').get('_password');
    this.registerForm.patchValue({
      password: this.password.value,
    });
    console.log(this.registerForm.get('password'));
    this.userService.register(this.registerForm.value).subscribe(data => {
      this.router.navigateByUrl('user/login');
    });
  }
}
