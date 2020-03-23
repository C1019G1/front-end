import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addNewProductForm: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addNewProductForm = this.fb.group({
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
  }

  onSubmit() {
  }
}
