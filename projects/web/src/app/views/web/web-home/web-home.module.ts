import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeRoute } from './route/web-home/web-home.route';


@NgModule({
  declarations: [WebHomeRoute],
  imports: [
    CommonModule,
    WebHomeRoutingModule
  ]
})
export class WebHomeModule { }
