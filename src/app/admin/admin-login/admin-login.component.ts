import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private notify: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void { }
  loginAdmin(form) {
    console.log(form.value);

    let newAdmin = {
      password: form.value.password,
      email: form.value.email,
    };

    this.adminService.loginAdmin(newAdmin).subscribe((data) => {
      var username = localStorage.getItem('fname');
      if (data['status'] == true) {
        var user = data["data"];
        if (data["message"] == "Login success") {
          localStorage.setItem('logged_in', "true");
          localStorage.setItem('id', user["_id"]);
          localStorage.setItem('fname', user["firstname"]);
          localStorage.setItem('email', user["email"]);
          localStorage.setItem('lname', user["lastname"]);
          this.notify.sendSuccess(data['message'], username);
          this.router.navigate([`${'admin'}`])
        } else {
          this.notify.sendError(data['message']);
        }

      } else {
        this.notify.sendError(data['message']);
      }
      console.log(data);
    });
  }
}
