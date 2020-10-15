import { ViewBorrowedBooksComponent } from './../books/view-borrowed-books/view-borrowed-books.component';
import { AdminGuardGuard } from './../admin-guard.guard';
import { ViewAllUsersComponent } from './../users/view-all-users/view-all-users.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewBooksByCategoryComponent } from './../books/view-books-by-category/view-books-by-category.component';
import { ViewUserComponent } from './../users/view-user/view-user.component';
import { ViewBookComponent } from './../books/view-book/view-book.component';
import { CreateBookComponent } from './../books/create-book/create-book.component';
import { UpdateUserComponent } from './../users/update-user/update-user.component';
import { UpdateBookComponent } from './../books/update-book/update-book.component';
import { DeleteBookComponent } from './../books/delete-book/delete-book.component';
import { DeleteUserComponent } from './../users/delete-user/delete-user.component';
import { CreateUserComponent } from './../users/create-user/create-user.component';
import { ViewAllBooksComponent } from './../books/view-all-books/view-all-books.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate:[AdminGuardGuard] },
  //{ path: 'view-books', component: ViewBooksComponent },
  { path: 'create-book', component: CreateBookComponent,canActivate:[AdminGuardGuard] },
  { path: 'view-books/delete-book/:id', component: DeleteBookComponent,canActivate:[AdminGuardGuard] },
  { path: 'view-books/update-book/:id', component: UpdateBookComponent,canActivate:[AdminGuardGuard] },
  { path: 'category/:id', component: ViewAllBooksComponent,canActivate:[AdminGuardGuard] },
  { path: 'category/:id/book/:id', component: ViewBookComponent,canActivate:[AdminGuardGuard] },
  { path: 'book/:id', component: ViewBookComponent,canActivate:[AdminGuardGuard] },
  {path: 'view-books', component:ViewBooksComponent, canActivate:[AdminGuardGuard] },
  { path: 'create-user', component: CreateUserComponent,canActivate:[AdminGuardGuard] },
  { path: 'view-users', component: ViewAllUsersComponent,canActivate:[AdminGuardGuard] },
  { path: 'view-users/delete-user/:id', component: DeleteUserComponent,canActivate:[AdminGuardGuard] },
  { path: 'view-users/update-user/:id', component: UpdateUserComponent,canActivate:[AdminGuardGuard] },
  { path: 'create-category', component: CreateCategoryComponent,canActivate:[AdminGuardGuard] },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'borrowed-books', component: ViewBorrowedBooksComponent, canActivate: [AdminGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
