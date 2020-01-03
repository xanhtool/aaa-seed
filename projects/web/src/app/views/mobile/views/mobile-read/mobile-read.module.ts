import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileReadRoutingModule } from './mobile-read-routing.module';
import { MobileReadRoute } from './views/route/mobile-read.route';


@NgModule({
  declarations: [MobileReadRoute],
  imports: [
    CommonModule,
    MobileReadRoutingModule
  ]
})
export class MobileReadModule { }
