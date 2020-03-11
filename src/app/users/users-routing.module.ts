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
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'history-register/:id', component: HistoryRegisterAuctionComponent},
  {path: 'edit/:id', component: EditProfileComponent},
  {path: 'history-auction/:id', component: HistoryAuctionComponent},
  {path: ':id', component: UserUpdateInfoComponent},
  {path: 'advisory', component: AdvisoryComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'password_reset', component: PasswordResetComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    Ng2Module
  ],
  exports: [RouterModule],
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
