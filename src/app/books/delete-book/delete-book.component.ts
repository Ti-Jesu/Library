import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  bookId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;

      this.booksService.deleteBook(this.bookId).subscribe(deleteBookdata => {
        {
          console.log('Book Deleted');
        }
      })
    });

  }
  goToPage(pageNumber: string): void {
    this.router.navigate([`${pageNumber}`])
  }
}
