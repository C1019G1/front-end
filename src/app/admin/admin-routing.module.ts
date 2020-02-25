import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'user-manager', component: AdminUserManagerComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AdminUserManagerComponent]
})
export class AdminRoutingModule { }
