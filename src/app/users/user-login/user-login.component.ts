import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private notify: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void { }

  loginUser(form) {
    console.log(form.value);

    let newUser = {
      password: form.value.password,
      email: form.value.email,
    };



    this.usersService.loginUser(newUser).subscribe((data) => {
      if (data['status'] == true) {
        var user = data["data"];
        localStorage.setItem('logged_in', "true");
        localStorage.setItem('id', user["_id"]);
        localStorage.setItem('fname', user["firstname"]);
        localStorage.setItem('email', user["email"]);
        localStorage.setItem('lname', user["lastname"]);
        var username = localStorage.getItem('fname');
        this.notify.sendSuccess(data['message'], username);

        this.router.navigate([`${''}`])

      } else {
        this.notify.sendError(data['message']);
      }

      console.log(data['message']);
    });
  }
  goToPage(pageNumber: string): void {
    this.router.navigate([`${pageNumber}`])
  }
}
