import { AppComponent } from './../../app.component';
import { Category } from './../category';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  categoryList: Category;

  constructor(private booksService: BooksService, private router: Router, private notify: AppComponent) { }

  ngOnInit(): void {
    this.booksService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
  }

  addNewBook(form) {

    console.log(form.value);

    let newBook = {

      bookName: form.value.book_name,
      categoryId: form.value.book_categoryId,
      description: form.value.book_description,
      image: form.value.image,
      rating: form.value.book_rating,
      author: form.value.book_author,
      category: form.value.book_category,
      quantity: form.value.book_quantity,
      isbn: form.value.book_isbn,
      year: form.value.book_year
    };

    this.booksService.createBook(newBook).subscribe(data => {
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

