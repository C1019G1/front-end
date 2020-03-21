import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';

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
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage // service quản lý firebase. Import từ Common firebase.module
  ) {
  }

  ngOnInit(): void {
    this.productRegisterForm = this.formBuilder.group({
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
    });
  }

  uploadFile(files: FileList) {
    // Đẩy vào Input type file rồi từ đó sinh ra các Child Component image-upload
    if (this.files.length <= 5) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        if (file.size <= 10485760) {
          if (this.files.findIndex(data => data.name === file.name) < 0) {
            this.files.push(file);
          }
        } else {
          alert('Ảnh quá lớn');
        }
      }
    }
  }

  deleteAttachment(event: any) {
    if (event) {
      // Xóa file trên sever và cả trong listURL
      this.storage.storage.refFromURL(event.downloadURL).delete().then(r => {
      });
      this.files.splice(event.index, 1);
      const index = this.imgUrlList.indexOf(event.downloadURL, 0);
      this.imgUrlList.splice(index, 1);
    }
  }

  pushUrlToList(image: any) {
    // Đẩy URL link vào listURL sau khi output của image upload có emit event
    if (image) {
      this.imgUrlList.push(image.downloadURL);
    }
  }

  onSendClick() {

  }


}
