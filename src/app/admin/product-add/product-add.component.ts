import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';
import {AngularFireStorage} from '@angular/fire/storage';

export interface Image {
  id: string;
  url: string;
}
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productInfor: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  username: string;
  files: File[] = [];
  imgUrlList = [];
  images: Image[];
  constructor(private fb: FormBuilder,
              private  adminService: AdminService,
              public router: Router,
              private cookieStorageService: CookieStorageService,
              private storage: AngularFireStorage ) { }

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
    this.username = this.cookieStorageService.getUsername();
    this.adminService.getInforAdmin(this.username).subscribe(data1 => {
        this.productInfor.patchValue(data1);
        this.productInfor.controls.startDay.setValue(new Date(data1.startDay));
        this.productInfor.controls.endDay.setValue(new Date(data1.endDay));
      },
      error => {
        alert(error.error) ;
      }
    );
  }
  onSubmit() {
  }

  cancel() {
    this.router.navigateByUrl('/product/list');
  }

  add() {
    this.productInfor.controls.imgUrlList.setValue(this.imgUrlList);
    this.productInfor.controls.images.setValue(this.images);
    this.adminService.saveProductInfor(this.productInfor.value).subscribe(data1 => {
        this.ngOnInit();
        this.productInfor.patchValue(data1);
        this.productInfor.controls.startDay.setValue(new Date(data1.startDay));
        this.productInfor.controls.endDay.setValue(new Date(data1.endDay));
      },
      error => {
        alert(error.error) ;
      }
    );
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
    } else {
      alert('Đã quá số lượng ảnh cho phép');
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
}


