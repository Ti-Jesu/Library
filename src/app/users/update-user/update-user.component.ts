import { AppComponent } from './../../app.component';
import { Book } from './../../books/book';
import { UsersService } from './../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userId = 0;
  userDetails: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private notify: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;

      this.usersService.viewUser(this.userId).subscribe((userData) => {
        this.userDetails = userData;
        console.log(this.userDetails);
      });
    });
  }
  updateUser(form) {
    console.log(form);

    let updateUser = {
      id: form.value.id,
      firstname: form.value.first_name,
      lastname: form.value.last_name,
      password: form.value.user_password,
      email: form.value.user_email,
    };

    this.usersService.updateUser(this.userId, updateUser).subscribe((data) => {
      console.log(data);
      var username = localStorage.getItem('fname');
      if (data['status'] == true) {
        this.notify.sendSuccess(data['message'], "Header");
        this.router.navigate([`${'admin'}`])
      } else {
        this.notify.sendError(data['message']);
      }
      console.log(data);
    });
  }
}
