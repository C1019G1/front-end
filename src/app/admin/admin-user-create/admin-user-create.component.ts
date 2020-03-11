import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AdminUserListService} from '../../services/admin-user-list.service';

@Component({
  selector: 'app-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {
  adminUserRegisterForm: FormGroup;
  today = new Date();
  minDate = new Date(1950, 0, 1);
  rankList = [];

  constructor(
    private formBuilder: FormBuilder,
    private adminUserListService: AdminUserListService,
    public dialogRef: MatDialogRef<AdminUserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.adminUserRegisterForm = this.formBuilder.group({
      password: [''],
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      rank: [4],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))([0-9]{7})$')]],
      identityNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      dayOfBirth: ['', [Validators.required]],
    });
    this.rankList = this.data.rankList;
  }

  saveNewUser() {
    function getValue(dob) {
      let date = dob.getDate();
      let month = (dob.getMonth() + 1);
      let year = dob.getFullYear();
      let temp = '';
      if (date < 10) {
        temp += '0' + date;
      } else {
        temp += date;
      }
      if (month < 10) {
        temp += '0' + month;
      } else {
        temp += month;
      }
      temp += year;
      return temp;
    }

    if (!this.adminUserRegisterForm.invalid) {
      if (confirm('Xác nhận thêm mới thành viên')) {
        this.adminUserRegisterForm.controls.password.setValue(getValue(new Date(this.adminUserRegisterForm.value.dayOfBirth)));
        console.log(this.adminUserRegisterForm.value)
        this.adminUserListService.register(this.adminUserRegisterForm.value).subscribe(next=>{
          alert("Đã tạo mới thành công!!");
          this.dialogRef.close();
        },error => {
          alert(error.error+'');
        })
      }
    } else {
      alert('Chưa đủ thông tin để lưu thành viên mới.\nMời bạn kiểm tra lại thông tin nhập vào');
    }
  }

  reType() {
    if (confirm('Bạn có muốn nhập lại từ đầu')) {
      this.ngOnInit();
    }
  }
}
