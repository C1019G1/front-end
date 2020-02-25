import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './Common/material.module';


const routes: Routes = [
  {path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
