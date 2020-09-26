import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: ':id', component: BooksDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
