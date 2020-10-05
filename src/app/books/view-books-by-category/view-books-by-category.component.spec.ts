import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksByCategoryComponent } from './view-books-by-category.component';

describe('ViewBooksByCategoryComponent', () => {
  let component: ViewBooksByCategoryComponent;
  let fixture: ComponentFixture<ViewBooksByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooksByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
