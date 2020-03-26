import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail-infor',
  templateUrl: './product-detail-infor.component.html',
  styleUrls: ['./product-detail-infor.component.css']
})
export class ProductDetailInforComponent implements OnInit {

  productInfor: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  private image: any;
  public id;
  objectKeys = Object.keys;
  constructor(private fb: FormBuilder,
              private  adminService: AdminService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }
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
      imgUrlList: [''],
      images: {
        id: [''],
        url: [''],
      }
    });
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
    });
    this.adminService.getInforProduct(this.id).subscribe(data1 => {
      this.productInfor.patchValue(data1);
      this.productInfor.controls.startDay.setValue(new Date(data1.startDay));
      this.productInfor.controls.endDay.setValue(new Date(data1.endDay));
      console.log(data1);
    });
  }
  onSubmit() {
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
  }

  update() {
    this.router.navigateByUrl('/admin/update-product/' + this.id);
  }
}

