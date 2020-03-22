import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRegisterService} from '../../services/product-register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';

@Component({
  selector: 'app-poduct-detail',
  templateUrl: './poduct-detail.component.html',
  styleUrls: ['./poduct-detail.component.css']
})
export class PoductDetailComponent implements OnInit, OnDestroy {
  public formAuction: FormGroup;
  public productDetail;
  public productOfId;
  currentPrice: Observable<any>;
  topFive = [];
  interval: any;
  userName;
  auctionTrigger = false;
  role;
  minPrice: number;

  constructor(
    public productRegisterService: ProductRegisterService,
    public formBuilder: FormBuilder,
    public activeedRoute: ActivatedRoute,
    private cookieStorageService: CookieStorageService,
  ) {
  }

  ngOnInit(): void {
    this.formAuction = this.formBuilder.group({
      betPrice: ['', [Validators.required]],
      betTime: [''],
      userName: [''],
    });
    this.userName = this.cookieStorageService.getUsername();
    this.role = this.cookieStorageService.getRoleName();
    if (this.role === 'ROLE_USER') {
      this.auctionTrigger = true;
    }
    // this.productList = products;
    this.activeedRoute.params.subscribe(data => {
      this.productOfId = data.id;
      console.log(this.productOfId);
      this.productRegisterService.getProductById(this.productOfId).subscribe(data1 => {
          this.productDetail = data1;
          console.log(this.productDetail);
        }, null,
        () => {
          this.getCurrentPrice(this.productOfId);
          this.interval = setInterval(() => {
            this.getCurrentPrice(this.productOfId);
            this.getTopFive(this.productOfId);
          }, 5000);
        });
    });
    this.getTopFive(this.productOfId);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getCurrentPrice(id: number) {
    this.currentPrice = this.productRegisterService.getCurrentPriceById(id);
    this.currentPrice.subscribe(value => {
      const price: number = value;
      if (price == null) {
        this.minPrice = this.productDetail.startPrice;
      } else {
        this.minPrice = price + this.productDetail.minBet;
      }
      console.log(this.minPrice);
    });
  }

  getTopFive(id: number) {
    this.productRegisterService.getTopFive(id).subscribe(value => {
      this.topFive = value;
    });
  }

  auction() {
    if (this.formAuction.controls.betPrice.value < this.minPrice) {
      alert('Giá được đặt phải cao hơn ' + this.minPrice + '\nCó thể dùng hai dấu mũi tên để điều chỉnh mức giá');
      this.formAuction.controls.betPrice.setValue(this.minPrice);
    } else {
      if (confirm('Giá của bạn đã đặt là ' + this.formAuction.controls.betPrice.value)) {
        const day = new Date();
        this.formAuction.controls.userName.setValue(this.userName);
        this.formAuction.controls.betTime.setValue(day);
        console.log(this.formAuction.value);
        this.productRegisterService.saveAuction(this.productOfId, this.formAuction.value).subscribe(() => {
          alert('Đã đặt giá thành công');
        });
      }
    }
  }


}

