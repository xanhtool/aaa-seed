import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileBookRoutingModule } from './mobile-book-routing.module';
import { MobileBookRoute } from './views/route/mobile-book.route';


@NgModule({
  declarations: [MobileBookRoute],
  imports: [
    CommonModule,
    MobileBookRoutingModule
  ]
})
export class MobileBookModule { }
