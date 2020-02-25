import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {UserUpdateInfoComponent} from './user-update-info/user-update-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../Common/material.module';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'update', component: UserUpdateInfoComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [RouterModule],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserUpdateInfoComponent]
})
export class UsersRoutingModule {
}
