import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = 'https://olibrary.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  createBook(bookBody): Observable<Book> {
    const bookUrl = this.baseUrl + '/books'; //declaring end Point
    return this.httpClient.post<Book>(bookUrl, bookBody); //returns an observable
  }

  BorrowBook(bookBody): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/borrow'; //declaring end Point
    return this.httpClient.post<Book>(bookUrl, bookBody); //returns an observable
  }
  getCategories(): Observable<Category> {
    const categoriesUrl = this.baseUrl + '/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  getAllBooks(): Observable<Book> {
    const bookUrl = this.baseUrl + '/books';
    return this.httpClient.get<Book>(bookUrl);
  }

  viewBook(bookId): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/' + bookId; //declaring end Point
    return this.httpClient.get<Book>(bookUrl); //returns an observable
  }

  updateBook(bookId, bookBody): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/' + bookId; //declaring end Point
    return this.httpClient.put<Book>(bookUrl, bookBody); //returns an observable
  }
  deleteBook(bookId): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/' + bookId; //declaring end Point
    return this.httpClient.delete<Book>(bookUrl); //returns an observable
  }

  searchCategoryBook(categoryId): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/cat/' + categoryId; //declaring end Point
    return this.httpClient.get<Book>(bookUrl); //returns an observable
  }

  searchDateBook(dateParams): Observable<Book> {
    const bookUrl = this.baseUrl + '/books/date=' + dateParams; //declaring end Point
    return this.httpClient.get<Book>(bookUrl); //returns an observable
  }
}
