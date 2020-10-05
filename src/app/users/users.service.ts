import { Category } from './../books/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../books/book';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://olibrary.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {}

  loginUser(userBody): Observable<Book> {
    const userUrl = this.baseUrl + '/login'; //declaring end Point
    return this.httpClient.post<Book>(userUrl, userBody); //returns an observable
  }

  createUser(userBody): Observable<Book> {
    const userUrl = this.baseUrl + '/users'; //declaring end Point
    return this.httpClient.post<Book>(userUrl, userBody); //returns an observable
  }

  viewUsers(): Observable<Book> {
    const userUrl = this.baseUrl + '/users'; //declaring end Point
    return this.httpClient.get<Book>(userUrl); //returns an observable
  }
  viewUser(userId): Observable<Book> {
    const userUrl = this.baseUrl + '/users/' + userId; //declaring end Point
    return this.httpClient.get<Book>(userUrl); //returns an observable
  }

  deleteUser(userId): Observable<Book> {
    const userUrl = this.baseUrl + '/users/' + userId; //declaring end Point
    return this.httpClient.delete<Book>(userUrl); //returns an observable
  }

  updateUser(userId, userBody): Observable<Book> {
    const userUrl = this.baseUrl + '/user/' + userId; //declaring end Point
    return this.httpClient.put<Book>(userUrl, userBody); //returns an observable
  }
}
