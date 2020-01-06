import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadRoute } from './uis/read/read.route';


const routes: Routes = [
  { path: '', component: ReadRoute },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadRoutingModule { }
