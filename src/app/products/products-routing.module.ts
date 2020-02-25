import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MaterialModule} from '../Common/material.module';
import {Ng2Module} from '../Common/ng2.module';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    Ng2Module,
  ],
  exports: [RouterModule],
  declarations: [ProductListComponent]
})
export class ProductsRoutingModule { }
