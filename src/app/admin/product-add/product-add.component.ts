import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productInfor: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  constructor(private fb: FormBuilder,
              private  adminService: AdminService,
              public router: Router) { }

  ngOnInit(): void {
    this.productInfor = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      userId: ['', Validators.required],
      userInforDetail: ['', Validators.required],
      catalogue: ['', Validators.required],
      startPrice: ['', Validators.required],
      minBet: ['', Validators.required],
      startDay: ['', Validators.required],
      endDay: ['', Validators.required],
      warranty: ['', Validators.required],
      productInfo: ['', Validators.required],
      contractPhoneNumber: ['', Validators.required],
      contractAddress: ['', Validators.required],
      idUser: [''],
      userName: [''],
      fullName: [''],
      email: [''],
      phone: [''],
    });
  }
  onSubmit() {
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
  }

  add() {
    this.adminService.saveProductInfor(this.productInfor.value).subscribe(data1 => {
        this.ngOnInit();
        this.productInfor.patchValue(data1);
      },
      error => {
        alert(error.error) ;
      }
    );
  }
}


