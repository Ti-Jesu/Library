import { AppComponent } from './../../app.component';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  bookId = 0;
  bookDetails: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router,
    private notify: AppComponent
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.bookId = data.id;
    });

    this.booksService.viewBook(this.bookId).subscribe((bookData) => {
      this.bookDetails = bookData;
      console.log(this.bookDetails);
    });
  }
  //i have not checked this method
  // onBtnActionClickedV(event) {
  //   this.router.navigate(['/books']);
  // }
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
        this.router.navigate([`${''}`])
      } else {
        this.notify.sendWarning(data['message'], username);
      }
    });
  }
}
