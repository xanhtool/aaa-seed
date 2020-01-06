import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksRoute } from './uis/books/books.route';


const routes: Routes = [
  { path: '', component: BooksRoute },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
