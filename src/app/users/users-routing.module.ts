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
import {LoginCheckGuard} from '../guard/login-check.guard';
import {LoginHistoryComponent} from './login-history/login-history.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserGuard} from '../guard/user.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReceiveProductInfoComponent } from './receive-product-info/receive-product-info.component';
import { BillComponent } from './bill/bill.component';
import { UserCheckOutComponent } from './user-check-out/user-check-out.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'user/:id', component: UserUpdateInfoComponent},
  {path: 'user/update/:id', component: EditProfileComponent},
  {path: 'user/history-reg/:id', component: HistoryRegisterAuctionComponent},
  {path: 'user/history-auc/:id', component: HistoryAuctionComponent},
  {path: 'advisory', component: AdvisoryComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'password_reset', component: PasswordResetComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'login-history', component: LoginHistoryComponent},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [UserGuard]},
  {path: 'receive-product-info', component: ReceiveProductInfoComponent},
  {path: 'cart', component: UserCheckOutComponent, canActivate: [UserGuard]},
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
    ChangePasswordComponent,
    ReceiveProductInfoComponent,
    BillComponent,
    PasswordResetComponent,
    UserCheckOutComponent]
})
export class UsersRoutingModule {
}
