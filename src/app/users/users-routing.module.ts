import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {UserUpdateInfoComponent} from './user-update-info/user-update-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../Common/material.module';
import { HistoryRegisterAuctionComponent } from './history-register-auction/history-register-auction.component';
import { HistoryAuctionComponent } from './history-auction/history-auction.component';
import {Ng2Module} from '../Common/ng2.module';
import { GuideComponent } from './guide/guide.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import {HelloComponent} from './hello/hello.component';
import {AdminGuard} from '../guard/admin.guard';
import {LoginCheckGuard} from '../guard/login-check.guard';
import {LoginHistoryComponent} from './login-history/login-history.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserGuard} from '../guard/user.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'update', component: UserUpdateInfoComponent},
  {path: 'history-register', component: HistoryRegisterAuctionComponent},
  {path: 'history-auction', component: HistoryAuctionComponent},
  {path: 'advisory', component: AdvisoryComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'password_reset', component: PasswordResetComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'login-history', component: LoginHistoryComponent},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [UserGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    Ng2Module
  ],
    exports: [RouterModule, UserLoginComponent],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserUpdateInfoComponent,
    HistoryRegisterAuctionComponent,
    HistoryAuctionComponent,
    AdvisoryComponent,
    GuideComponent,
    PasswordResetComponent,
    EditProfileComponent,
    ChangePasswordComponent]
})
export class UsersRoutingModule {
}
