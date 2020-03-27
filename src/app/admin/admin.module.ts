import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../Common/material.module';
import { ProductAddComponent } from './product-add/product-add.component';
import {ProductsRoutingModule} from '../products/products-routing.module';
import { ProductDetailInforComponent } from './product-detail-infor/product-detail-infor.component';


@NgModule({
  declarations: [AdminComponent, ProductUpdateComponent, ProductAddComponent, ProductDetailInforComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MaterialModule,
        ProductsRoutingModule
    ]
})
export class AdminModule { }
