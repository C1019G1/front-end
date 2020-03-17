import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';
import {MaterialModule} from '../Common/material.module';
import {Ng2Module} from '../Common/ng2.module';
import { AdminUserCreateComponent } from './admin-user-create/admin-user-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminUserLockComponent } from './admin-user-lock/admin-user-lock.component';
import {AdminGuard} from '../guard/admin.guard';
import { ExchangeManagerComponent } from './exchange-manager/exchange-manager.component';
import { DialogConformExchangeComponent } from './dialog-conform-exchange/dialog-conform-exchange.component';

const routes: Routes = [
  { path: 'user-manager', component: AdminUserManagerComponent , canActivate: [AdminGuard] },
  { path: 'exchange-manager', component: ExchangeManagerComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    Ng2Module,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  declarations: [AdminUserManagerComponent, AdminUserCreateComponent, AdminUserLockComponent, ExchangeManagerComponent, DialogConformExchangeComponent]
})
export class AdminRoutingModule { }
