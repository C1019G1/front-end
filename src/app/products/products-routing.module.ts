import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {PoductDetailComponent} from './poduct-detail/poduct-detail.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'productDetail', component: PoductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [ProductListComponent, PoductDetailComponent]
})
export class ProductsRoutingModule {
}
