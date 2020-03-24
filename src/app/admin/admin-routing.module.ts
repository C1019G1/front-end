import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AdminUserManagerComponent} from './admin-user-manager/admin-user-manager.component';
import {MaterialModule} from '../Common/material.module';
import {Ng2Module} from '../Common/ng2.module';
import { AdminUserCreateComponent } from './admin-user-create/admin-user-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminUserLockComponent } from './admin-user-lock/admin-user-lock.component';
import {AdminGuard} from '../guard/admin.guard';
import { AdminProductManagerComponent } from './admin-product-manager/admin-product-manager.component';
import { AdminCheckProductComponent } from './admin-check-product/admin-check-product.component';
import { DialogConformExchangeComponent } from './dialog-conform-exchange/dialog-conform-exchange.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {FirebaseModule} from '../Common/firebase.module';
import { AdminTransactionManagerComponent } from './admin-transaction-manager/admin-transaction-manager.component';

const routes: Routes = [
  { path: 'user-manager', component: AdminUserManagerComponent , canActivate: [AdminGuard] },
  { path: 'product-manager', component: AdminProductManagerComponent, canActivate: [AdminGuard] },
  { path: 'check-product', component: AdminCheckProductComponent, canActivate: [AdminGuard] },
  { path: 'update-product', component: ProductUpdateComponent },
  { path: 'add-product', component: ProductAddComponent },
  { path: 'transaction-manager', component: AdminTransactionManagerComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    Ng2Module,
    ReactiveFormsModule,
    FormsModule,
    FirebaseModule
  ],
  exports: [RouterModule],
  declarations: [AdminUserManagerComponent,
    AdminProductManagerComponent,
    AdminCheckProductComponent,
    AdminUserCreateComponent,
    AdminUserLockComponent,
    DialogConformExchangeComponent,
    AdminTransactionManagerComponent
  ]
})
export class AdminRoutingModule { }
