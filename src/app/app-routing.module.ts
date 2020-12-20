import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCreateComponent } from './auth/Task/task-create/task-create.component';
import { TaskDeleteComponent } from './auth/Task/task-delete/task-delete.component';
import { TaskUpdateComponent } from './auth/Task/task-update/task-update.component';
import { TaskHistoryCreateComponent } from './auth/TaskHistory/task-history-create/task-history-create.component';
import { TaskHistoryUpdateComponent } from './auth/TaskHistory/task-history-update/task-history-update.component';
import { UserCreateComponent } from './auth/User/user-create/user-create.component';
import { UserUpdateComponent } from './auth/User/user-update/user-update.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  }, 

  {
    path:'tasks/:id',
    component: TaskDetailComponent, 
  },

  {
    path: 'user/:id',
    component: UserDetailComponent,
  },

  {
    path: 'user/update/:id',
    component: UserUpdateComponent,
  },

  {
    path: 'user/create/:id',
    component: UserCreateComponent,
  },

  {
    path: 'user/:id/taskHistory/create',
    component: TaskHistoryCreateComponent,
  },


  {
    path: 'user/:id/taskHistory/update',
    component: TaskHistoryUpdateComponent,
  },


  {
    path:'taskCreate',
    component: TaskCreateComponent,
  },

  {
    path:'taskUpdate',
    component: TaskUpdateComponent,
  },

  
  {
    path:'taskDelete',
    component: TaskDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
