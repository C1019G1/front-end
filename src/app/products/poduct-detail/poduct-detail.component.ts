import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRegisterService} from '../../services/product-register.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

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
  count = 0;

  constructor(
    public productRegisterService: ProductRegisterService,
    public formBuilder: FormBuilder,
    public activeedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formAuction = this.formBuilder.group({
      betPrice: [''],
    });
    // this.productList = products;
    this.activeedRoute.params.subscribe(data => {
      this.productOfId = data.id;
      console.log(this.productOfId);
      this.productRegisterService.getProductById(this.productOfId).subscribe(data1 => {
        this.productDetail = data1;
        // console.log(this.productOfId);
        console.log(this.productDetail);
      });
    });
    this.getCurrentPrice(this.productOfId);
    this.interval = setInterval(() => {
      this.getCurrentPrice(this.productOfId);
      this.getTopFive(this.productOfId);
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getCurrentPrice(id: number) {
    this.currentPrice = this.productRegisterService.getCurrentPriceById(id);
  }
  getTopFive(id: number) {
     this.productRegisterService.getTopFive(id).subscribe(value => {
       this.topFive = value;
     });
  }
  auction() {

  }


}

