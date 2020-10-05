import { BorrowedBooksService } from './../borrowed-books.service';
import { Component, OnInit } from '@angular/core';
import { BorrowedBooks } from './borrowed-books'


@Component({
  selector: 'app-view-borrowed-books',
  templateUrl: './view-borrowed-books.component.html',
  styleUrls: ['./view-borrowed-books.component.css']
})
export class ViewBorrowedBooksComponent implements OnInit {
  Borrowed: BorrowedBooks;
  constructor(private borrowedBookService: BorrowedBooksService) { }


  ngOnInit(): void {
    this.borrowedBookService.getAllBorrowedBooks().subscribe((data) => {
      this.Borrowed = data;
    });
  }

}
