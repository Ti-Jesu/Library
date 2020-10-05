import { Category } from './../../books/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/books/book';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css'],
})
export class ViewAllUsersComponent implements OnInit {
  userList: Book;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.viewUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
