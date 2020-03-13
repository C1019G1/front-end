import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {ChangePasswordComponent} from '../change-password/change-password.component';
import {UserProfileService} from '../../services/user-profile.service';

export interface UserProfile {
  fullName;
  dayOfBirth;
  address;
  email;
  contributePoint;
  identityNumber;
  phone;
  rank: {
    id;
    name;
  };
}

@Component({
  selector: 'app-user-update-info',
  templateUrl: './user-update-info.component.html',
  styleUrls: ['./user-update-info.component.css']
})
export class UserUpdateInfoComponent implements OnInit {

  public formUpdateInfo: FormGroup;
  public id;
  public user: UserProfile;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  constructor(
    public dialog: MatDialog,
    public userProfileService: UserProfileService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.formUpdateInfo = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      dayOfBirth: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contributePoint: ['', [Validators.required]],
      rank: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(09|01[2|6|8|9])+([0-9]{8})$')]],
      identityNumber: ['', [Validators.required], ] ,
      // currentPassword: ['', [Validators.required]],
      // pwGroup: this.formBuilder.group({
      //   password: ['', [Validators.required, Validators.minLength(6)]],
      //   confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      // }, {validator: comparePassword}),
    });
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      this.userProfileService.getUserProfileById(this.id).subscribe(data1 => {
         this.user = data1;
         this.formUpdateInfo.controls.fullName.setValue(this.user.fullName) ;
         this.formUpdateInfo.controls.dayOfBirth.setValue(this.user.dayOfBirth) ;
         this.formUpdateInfo.controls.address.setValue(this.user.address);
         this.formUpdateInfo.controls.email.setValue(this.user.email);
         this.formUpdateInfo.controls.contributePoint.setValue(this.user.contributePoint);
         this.formUpdateInfo.controls.rank.setValue(this.user.rank.name);
         this.formUpdateInfo.controls.phone.setValue(this.user.phone);
         this.formUpdateInfo.controls.identityNumber.setValue(this.user.identityNumber);
      });
    });
  }
  openDialogEditProfile() {
    this.userProfileService.getUserProfileById(this.id).subscribe(data2 => {
      this.dialog.open(EditProfileComponent, {
        width: '600px',
        height: '600px',
        data: {name: data2},
        disableClose: true
      });
    });
  }

  openDialogChangePassWord() {
    this.dialog.open(ChangePasswordComponent, {
      width: '600px',
      height: '360px',
      data: {data1: 'Dialog'},
      disableClose: true
    });
  }

}
