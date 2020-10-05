import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBorrowedBooksComponent } from './view-borrowed-books.component';

describe('ViewBorrowedBooksComponent', () => {
  let component: ViewBorrowedBooksComponent;
  let fixture: ComponentFixture<ViewBorrowedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBorrowedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
