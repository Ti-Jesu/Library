import { UsersService } from './../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  userId = 0;
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;

      this.usersService.deleteUser(this.userId).subscribe((deleteData) => {
        console.log(this.userId);
      });
    });
  }

  goToPage(pageNumber: string): void {
    this.router.navigate([`${pageNumber}`])
  }
}
