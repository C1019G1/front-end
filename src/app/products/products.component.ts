import {Component, OnInit} from '@angular/core';
import {ProductRegisterService} from '../services/product-register.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  public productRegisterList;
  p: any;
  term: any;
  constructor(public productRegisterServiece: ProductRegisterService,
              public  dialog: MatDialog
  ) { }

  ngOnInit() {
  }
}
