import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksRoute } from './uis/books/books.route';
import { ListContainer } from './uis/list/list.container';
import { ItemComponent } from './uis/item/item.component';


@NgModule({
  declarations: [BooksRoute, ListContainer, ItemComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
