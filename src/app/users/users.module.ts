import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HelloComponent } from './hello/hello.component';
import { LoginHistoryComponent } from './login-history/login-history.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [UsersComponent, HelloComponent, LoginHistoryComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
