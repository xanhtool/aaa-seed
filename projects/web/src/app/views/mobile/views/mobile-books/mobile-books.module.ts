import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileBooksRoutingModule } from './mobile-books-routing.module';
import { MobileBooksRoute } from './views/route/mobile-books.route';
import { MobileBooksListContainer } from './views/containers/mobile-books-list/mobile-books-list.container';
import { MobileBooksListItemComponent } from './views/components/mobile-books-list-item/mobile-books-list-item.component';


@NgModule({
  declarations: [MobileBooksRoute, MobileBooksListContainer, MobileBooksListItemComponent],
  imports: [
    CommonModule,
    MobileBooksRoutingModule
  ]
})
export class MobileBooksModule { }
