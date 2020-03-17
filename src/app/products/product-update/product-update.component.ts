import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productInfor: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  productInfort: ProductInfor =  {name: 'Iphone 8', userId: '1', userInforDetail: 'Id : 12', catalogue: 'Điện tử', start_price: '120000'
    , min_bet: '100000', start_day: '23/3/2020', end_day: '26/3/2020', product_infor: 'Sản xuất năm 2018'};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productInfor = this.fb.group({
      name: ['', [Validators.required]],
      userId: ['', Validators.required],
      userInforDetail: ['', Validators.required],
      catalogue: ['', Validators.required],
      start_price: ['', Validators.required, Validators.pattern('^[0-9]$')],
      min_bet: ['', Validators.required, Validators.pattern('^[0-9]$')],
      start_day: ['', Validators.required],
      end_day: ['', Validators.required],
      product_infor: ['', Validators.required],
    });
    this.productInfor.patchValue(this.productInfort);
  }
  onSubmit() {
  }
}
export interface ProductInfor {
  name: string;
  userId: string;
  userInforDetail: string;
  catalogue: string;
  start_price: string;
  min_bet: string;
  start_day: string;
  end_day: string;
  product_infor: string;
}


