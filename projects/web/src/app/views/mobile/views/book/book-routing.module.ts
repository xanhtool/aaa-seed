import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoute } from './uis/book/book.route';


const routes: Routes = [
  { path: '', component: BookRoute },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
