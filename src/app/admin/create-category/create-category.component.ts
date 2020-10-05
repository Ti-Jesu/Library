import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/site-framework/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private notify: AppComponent
  ) { }

  ngOnInit(): void { }
  createCategory(form) {
    console.log(form.value);
    if ((localStorage.getItem("email") === null)) {
      this.notify.sendError('please login');
    }
    else {
      var user = localStorage.getItem('email')
      var username = localStorage.getItem('fname')
      if (user == 'lavictor23@gmail.com') {
        this.notify.sendSuccess(username, '')
        let newCategory = {

          categoryName: form.value.category_name,
        };
        this.categoryService.createCategory(newCategory).subscribe((data) => {
          this.notify.sendInfo(data['message'])
        });
      } else {
        this.notify.sendError('please login as the administrator');
        return;
      }

    }

    let newCategory = {

      categoryName: form.value.category_name,
    };

    this.categoryService.createCategory(newCategory).subscribe((data) => {

    });
  }
}
