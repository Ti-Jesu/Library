import { Router } from '@angular/router';
import { Book } from 'src/app/books/book';
import { BooksService } from './../../books/books.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css'],
})
export class ViewBooksComponent implements OnInit {
  BookList: Book;
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((data) => {
      this.BookList = data;
    });
  }
}
