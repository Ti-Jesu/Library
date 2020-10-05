import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private notify: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
    var username = localStorage.getItem('fname');
    localStorage.clear();
    if (localStorage == null) {
      this.notify.sendError("Please logout")
    }
    else {
      this.notify.sendSuccess("You are out", username)
    }


  }

  goToPage(pageNumber: string): void {
    this.router.navigate([`${pageNumber}`])
  }
}
