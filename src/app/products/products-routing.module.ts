import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {PoductDetailComponent} from './poduct-detail/poduct-detail.component';
import { CountDownComponent } from './count-down/count-down.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductAddComponent} from './product-add/product-add.component';
import { MessageDialogeComponent } from './message-dialoge/message-dialoge.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ImageUploadComponent } from './product-register/image-upload/image-upload.component';
import {DragDropDirective} from '../Common/dragdrop.directive';
import {FirebaseModule} from '../Common/firebase.module';
import {MaterialModule} from '../Common/material.module';
const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'detail/:id', component: PoductDetailComponent},
  {path: 'list/:catalogue', component: ProductListComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'update', component: ProductAddComponent},
  {path: 'register', component: ProductRegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FirebaseModule
  ],
  exports: [RouterModule],
  declarations: [ProductListComponent,
    PoductDetailComponent,
    CountDownComponent,
    MessageDialogeComponent,
    ProductRegisterComponent,
    ImageUploadComponent,
    DragDropDirective
    ]
})
export class ProductsRoutingModule {
}
