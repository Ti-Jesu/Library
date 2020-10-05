import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UserLoginComponent,
    ViewUserComponent,
    ViewAllUsersComponent,
    UserLogoutComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule { }
