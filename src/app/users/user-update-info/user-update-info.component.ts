import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-update-info',
  templateUrl: './user-update-info.component.html',
  styleUrls: ['./user-update-info.component.css']
})
export class UserUpdateInfoComponent implements OnInit {
  public formUpdateInfo: FormGroup;
  public idUser;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.formUpdateInfo = this.formBuilder.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))([0-9]{7})$')]],
      address: ['', [Validators.required]],
    })
    ;
  }

  userRegister() {
  }
}
