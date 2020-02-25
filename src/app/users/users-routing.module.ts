import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-login/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [UserLoginComponent, UserRegisterComponent]
})
export class UsersRoutingModule { }
