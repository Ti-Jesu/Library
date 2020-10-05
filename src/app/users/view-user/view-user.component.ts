import { UsersService } from './../users.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/books/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  userId: Book;
  userDetails: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
      console.log(this.userDetails);
    });
  }
}
