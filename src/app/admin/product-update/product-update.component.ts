import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productInfor: FormGroup;
  minDate = new Date();
  maxDate = new Date();
  objectKeys = Object.keys;
  public id;
  files: File[] = [];
  imgUrlList = [];
  constructor(private fb: FormBuilder,
              private  adminService: AdminService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) { }

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
    });
  }
  onSubmit() {
  }

  cancel() {
     this.router.navigateByUrl('/product/list');
  }

  update() {
    this.productInfor.controls.imgUrlList.setValue(this.imgUrlList);
    this.adminService.saveProductInfor(this.productInfor.value).subscribe(data1 => {
        this.router.navigateByUrl('/admin/product-detail-infor/' + this.id);
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


