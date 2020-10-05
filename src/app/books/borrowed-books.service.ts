import { BorrowedBooks } from './view-borrowed-books/borrowed-books';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BorrowedBooksService {

  baseUrl = 'https://olibrary.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  getAllBorrowedBooks(): Observable<BorrowedBooks> {
    console.log('borrowed')
    const bookUrl = this.baseUrl + '/borrowedbooks';
    return this.httpClient.get<BorrowedBooks>(bookUrl);
  }
}
