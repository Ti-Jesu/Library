import { UpdateBookComponent } from './update-book/update-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ViewBooksByCategoryComponent } from './view-books-by-category/view-books-by-category.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ViewBorrowedBooksComponent } from './view-borrowed-books/view-borrowed-books.component';

@NgModule({
  declarations: [
    BooksComponent,
    CreateBookComponent,
    ViewBookComponent,
    DeleteBookComponent,
    ViewBooksByCategoryComponent,
    ViewAllBooksComponent,
    BorrowBookComponent,
    UpdateBookComponent,
    ViewBorrowedBooksComponent,
  ],
  imports: [CommonModule, FormsModule, BooksRoutingModule],
})
export class BooksModule {}
