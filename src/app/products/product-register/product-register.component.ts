import {Component, OnInit} from '@angular/core';
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
  files: File[] = [];
  imgUrlList = [];
  today = new Date();
  productRegisterForm: FormGroup;
  productCatalogue: ProductCatalogue[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.productRegisterForm = this.formBuilder.group({
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
    });
  }

  uploadFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (this.files.findIndex(data => data.name === file.name) < 0) {
        this.files.push(file);
      }
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  onSendClick() {

  }
}
