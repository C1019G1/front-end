import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {
  public formNewUser: FormGroup;
  today = new Date();
  public minDate = new Date(1900, 0, 1);

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.formNewUser = this.formBuilder.group({
      password: [''],
      name: [''],
      userName: [''],
      address: [''],
      rank: [''],
      email: [''],
      phoneNumber: [''],
      identityNumber: [''],
      dateOfBirth: [''],
    });
  }

  addNewUser() {
    const day = new Date(this.formNewUser.value.dateOfBirth);
    this.formNewUser.controls.password.setValue(day.getDate() + '' + (day.getMonth() + 1) + day.getFullYear());
  }
}
