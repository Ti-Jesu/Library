import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ViewBooksByCategoryComponent } from './view-books-by-category/view-books-by-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewBorrowedBooksComponent } from './view-borrowed-books/view-borrowed-books.component';

const routes: Routes = [
  { path: '', component: ViewAllBooksComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'category/:id', component: ViewBooksByCategoryComponent },
  { path: 'category/:id/book/:id', component: ViewBookComponent },
  { path: 'book/:id', component: ViewBookComponent },
  { path: 'admin/borrowedbooks', component: ViewBorrowedBooksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
