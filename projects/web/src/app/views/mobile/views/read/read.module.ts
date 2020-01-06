import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadRoutingModule } from './read-routing.module';
import { ReadRoute } from './uis/read/read.route';


@NgModule({
  declarations: [ReadRoute],
  imports: [
    CommonModule,
    ReadRoutingModule
  ]
})
export class ReadModule { }
