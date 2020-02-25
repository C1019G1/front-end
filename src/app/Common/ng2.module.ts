import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  exports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class Ng2Module {
}
