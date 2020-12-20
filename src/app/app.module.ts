import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './auth/Task/task-create/task-create.component';
import { TaskUpdateComponent } from './auth/Task/task-update/task-update.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserUpdateComponent } from './auth/User/user-update/user-update.component';
import { UserCreateComponent } from './auth/User/user-create/user-create.component';
import { TaskHistoryCreateComponent } from './auth/TaskHistory/task-history-create/task-history-create.component';
import { TaskHistoryUpdateComponent } from './auth/TaskHistory/task-history-update/task-history-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    TaskDetailComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    UserDetailComponent,
    UserUpdateComponent,
    UserCreateComponent,
    TaskHistoryCreateComponent,
    TaskHistoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
