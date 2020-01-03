import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileBooksRoute } from './views/route/mobile-books.route';


const routes: Routes = [
  {
    path: '',
    component: MobileBooksRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileBooksRoutingModule { }
