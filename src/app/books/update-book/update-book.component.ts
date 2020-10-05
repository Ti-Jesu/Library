import { AppComponent } from './../../app.component';
import { Category } from './../category';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  categoryList: Category;
  bookId = 0;
  bookDetails: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router,
    private notify: AppComponent
  ) { }

  ngOnInit(): void {
    this.booksService.getCategories().subscribe((data) => {
      this.categoryList = data;
    });
    this.activatedRoute.params.subscribe((data) => {
      this.bookId = data.id;

      this.booksService.viewBook(this.bookId).subscribe((bookData) => {
        this.bookDetails = bookData; //get the exixting data
        console.log(this.bookDetails);
      });
    });
  }

  updateBook(form) {
    console.log(form);

    let updateBook = {
      _id: form.value.id,
      bookName: form.value.book_name,
      categoryName: form.value.book_categoryName,
      description: form.value.book_description,
      image: form.value.book_image,
      rating: form.value.book_rating,
      author: form.value.book_author,
      category: form.value.book_category,
      quantity: form.value.book_quantity,
      isbn: form.value.book_isbn,
      year: form.value.book_year,
    };

    this.booksService.updateBook(this.bookId, updateBook).subscribe((data) => {
      var username = localStorage.getItem('fname');
      if (data['status'] == true) {
        this.notify.sendSuccess(data['message'], "");
        this.router.navigate([`${'admin'}`])
      } else {
        this.notify.sendError(data['message']);
      }
      console.log(data);
    });
  }
}
