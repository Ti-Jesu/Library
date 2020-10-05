import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Category } from './../category';
import { BooksService } from './../books.service';
import { Book } from './../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-books-by-category',
  templateUrl: './view-books-by-category.component.html',
  styleUrls: ['./view-books-by-category.component.css'],
})
export class ViewBooksByCategoryComponent implements OnInit {
  searchCategory: Category;
  BookList: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private notify: AppComponent
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data.id;

      this.booksService
        .searchCategoryBook(this.searchCategory)
        .subscribe((categoryData) => {
          this.BookList = categoryData;
        });
    });
  }
  BorrowBook(form) {
    if (localStorage.getItem('logged_in') == null) {
      this.notify.sendNotLogged();
      return;
    }

    console.log(form.value);
    var userid = localStorage.getItem('id');
    var username = localStorage.getItem('fname');
    let BorrowedBook = {
      bookId: form.value.book_id,
      userId: userid,
      bookName: form.value.book_name,
      userName: username,
    };

    this.booksService.BorrowBook(BorrowedBook).subscribe((data) => {
      console.log(data);
      localStorage.getItem('fname');
      if (data['status'] == true) {
        data['message'];
        this.notify.sendSuccess(data['message'], username);
      } else {
        this.notify.sendWarning(data['message'], username);
      }
    });
  }
}
