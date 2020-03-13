import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfileService} from '../../services/user-profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public formUpdateInfo: FormGroup;
  public id;
  public user: UserProfile;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  public user12: UserProfile;
  private user123;
  constructor(
    public userProfileService: UserProfileService,
    public formBuilder: FormBuilder,
    public router: Router,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.formUpdateInfo = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      dayOfBirth: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contributePoint: ['', [Validators.required]],
      rank: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(09|01[2|6|8|9])+([0-9]{8})$')]],
      identityNumber: ['', [Validators.required]],
    });
    this.id = this.data.name.id;
    this.userProfileService.getUserProfileById(this.id).subscribe(data1 => {
        this.user = data1;
        this.user12 = this.user;
        this.formUpdateInfo.controls.fullName.setValue(this.user.fullName) ;
        this.formUpdateInfo.controls.dayOfBirth.setValue(this.user.dayOfBirth) ;
        this.formUpdateInfo.controls.address.setValue(this.user.address);
        this.formUpdateInfo.controls.email.setValue(this.user.email);
        this.formUpdateInfo.controls.contributePoint.setValue(this.user.contributePoint);
        this.formUpdateInfo.controls.rank.setValue(this.user.rank.name);
        this.formUpdateInfo.controls.phone.setValue(this.user.phone);
        this.formUpdateInfo.controls.identityNumber.setValue(this.user.identityNumber);
      });

  }

  editUserProfile() {
    this.userProfileService.editUserProfile(this.formUpdateInfo.value, this.id).subscribe(data1 => {
        this.user123 = data1;
        this.formUpdateInfo.controls.fullName.setValue(this.user.fullName) ;
        this.formUpdateInfo.controls.dayOfBirth.setValue(this.user.dayOfBirth) ;
        this.formUpdateInfo.controls.address.setValue(this.user.address);
        this.formUpdateInfo.controls.email.setValue(this.user.email);
        this.formUpdateInfo.controls.contributePoint.setValue(this.user.contributePoint);
        this.formUpdateInfo.controls.rank.setValue(this.user.rank.name);
        this.formUpdateInfo.controls.phone.setValue(this.user.phone);
        this.formUpdateInfo.controls.identityNumber.setValue(this.user.identityNumber);
        });
    this.dialogRef.close();
    }
}

