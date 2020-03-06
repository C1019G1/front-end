import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [UsersComponent, HelloComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
