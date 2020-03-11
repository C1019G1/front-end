import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRegisterService} from '../../services/product-register.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-poduct-detail',
  templateUrl: './poduct-detail.component.html',
  styleUrls: ['./poduct-detail.component.css']
})
export class PoductDetailComponent implements OnInit {
  public formAuction: FormGroup;
  public productDetail;
  public productOfId;

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

  }
}

