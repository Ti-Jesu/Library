import { Category } from './../books/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl = 'https://olibrary.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {}
  createCategory(userBody): Observable<Category> {
    const userUrl = this.baseUrl + '/category'; //declaring end Point
    return this.httpClient.post<Category>(userUrl, userBody); //returns an observable
  }
}
