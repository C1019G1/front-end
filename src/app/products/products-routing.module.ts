import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {PoductDetailComponent} from './poduct-detail/poduct-detail.component';
import { CountDownComponent } from './count-down/count-down.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductRegisterComponent } from './product-register/product-register.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'detail/:id', component: PoductDetailComponent},
  {path: 'list/:catalogue', component: ProductListComponent},
  {path: 'register', component: ProductRegisterComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
    ],
  exports: [RouterModule],
  declarations: [ProductListComponent,
    PoductDetailComponent,
    CountDownComponent,
    ProductRegisterComponent,
    ]
})
export class ProductsRoutingModule {
}
