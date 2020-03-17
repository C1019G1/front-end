import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {PoductDetailComponent} from './poduct-detail/poduct-detail.component';
import { CountDownComponent } from './count-down/count-down.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductAddComponent} from './product-add/product-add.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'detail/:id', component: PoductDetailComponent},
  {path: 'list/:catalogue', component: ProductListComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'update', component: ProductAddComponent}
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
    ]
})
export class ProductsRoutingModule {
}
