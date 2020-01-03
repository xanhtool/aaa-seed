import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileHomeRoutingModule } from './mobile-home-routing.module';
import { MobileHomeRoute } from './views/route/mobile-home.route';


@NgModule({
  declarations: [MobileHomeRoute],
  imports: [
    CommonModule,
    MobileHomeRoutingModule
  ]
})
export class MobileHomeModule { }
