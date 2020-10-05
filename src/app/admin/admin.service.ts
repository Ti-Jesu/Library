import { Admin } from './admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'https://olibrary.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {}
  loginAdmin(userBody): Observable<Admin> {
    const userUrl = this.baseUrl + '/admin-login'; //declaring end Point
    return this.httpClient.post<Admin>(userUrl, userBody); //returns an observable
  }
}
