import { BooksService } from './../../books/books.service';
import { Category } from './../../books/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categoryList: Category;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getCategories().subscribe((data) => {
      this.categoryList = data;
    });
  }
}
