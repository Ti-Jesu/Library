import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private notify: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addNewUser(form) {
    console.log(form.value);

    let newUser = {
      firstname: form.value.first_name,
      lastname: form.value.last_name,
      password: form.value.password,
      email: form.value.email,
    };

    this.usersService.createUser(newUser).subscribe((data) => {
      var username = localStorage.getItem('fname');
      if (data['status'] == true) {
        this.notify.sendSuccess(data['message'], "");
        this.router.navigate([`${''}`])
      } else {
        this.notify.sendError(data['message']);
      }
      console.log(data);
    });
  }
}
