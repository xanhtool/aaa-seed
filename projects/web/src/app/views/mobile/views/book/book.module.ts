import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookRoute } from './uis/book/book.route';


@NgModule({
  declarations: [BookRoute],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
