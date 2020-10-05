import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import {Book} from './../book'

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  BookList:Book;  

  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(data=>{
      this.BookList=data;
    });
  }

}
