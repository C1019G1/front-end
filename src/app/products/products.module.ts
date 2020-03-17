import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {MaterialModule} from '../Common/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  declarations: [ProductsComponent, ProductAddComponent, ProductUpdateComponent, ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
