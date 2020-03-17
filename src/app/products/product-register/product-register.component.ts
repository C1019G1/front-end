import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface ProductCatalogue {
  id;
  name;
}
@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {
  today = new Date();
  productRegisterForm: FormGroup;
  productCatalogue: ProductCatalogue[] = [];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productRegisterForm = this.formBuilder.group({
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
    });
  }


}
