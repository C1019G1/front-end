import {Component, Inject, OnInit, NgZone, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {UserProfileDTO} from '../admin-user-manager/admin-user-manager.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-user-lock',
  templateUrl: './admin-user-lock.component.html',
  styleUrls: ['./admin-user-lock.component.css']
})
export class AdminUserLockComponent implements OnInit {
  adminUserLockForm: FormGroup;
  lockTimeStart;
  lockTimeEnd;
  today = new Date();
  userList: UserProfileDTO[] = [];
  reason = '';
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  removable = true;

  constructor(
    public dialogRef: MatDialogRef<AdminUserLockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngZone: NgZone,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.userList = Object.assign([], this.data.users);
    this.adminUserLockForm = this.formBuilder.group({
      users: [''],
      reasonLock: ['', [Validators.required]],
      dayLockStart: ['', [Validators.required]],
      dayLockEnd: ['', [Validators.required]]
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  remove(user: UserProfileDTO): void {
    const index = this.userList.indexOf(user);

    if (index >= 0) {
      this.userList.splice(index, 1);
    }
  }

  onCancelClick() {
    if (this.userList.length != this.data.users.length) {
      if (confirm('Bạn có muốn lưu danh sách mới này không?')) {
        this.data.users = this.userList;
      }
    }
    this.dialogRef.close({users: this.data.users});
  }

  onSendClick() {
    if(this.adminUserLockForm.invalid){
      alert("Thông tin nhập vào sai hoặc để trống")
    } else {
      this.adminUserLockForm.controls.users.setValue(this.userList);
    }
    console.log(this.adminUserLockForm.getRawValue())
  }

  onResetClick() {
    this.adminUserLockForm.reset();
    this.userList = Object.assign([], this.data.users);
  }
}
