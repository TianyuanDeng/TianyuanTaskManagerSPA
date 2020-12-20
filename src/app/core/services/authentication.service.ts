import { Injectable } from '@angular/core';
import { TaskCreateComponent } from 'src/app/auth/Task/task-create/task-create.component';
import { ApiService } from './api.service';
import { Task } from 'src/app/shared/models/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { taskRegister } from 'src/app/shared/models/taskRegister';
import { Delete } from 'src/app/shared/models/delete';
import { UserRegister } from 'src/app/shared/models/userRegister';
import { UserUpdate } from 'src/app/shared/models/userUpdate';
import { TaskHistoryRegesterModel } from 'src/app/shared/models/taskHistoryRegister';
import { TaskHistory } from 'src/app/shared/models/taskHistory';
import { TaskHistoryUpdateModule } from 'src/app/shared/models/taskHistoryUpdateModule';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService: ApiService) { }

  createTask(taskRegister: taskRegister): Observable<boolean> {
    return this.apiService.create('tasks', taskRegister)
    .pipe(
      map((response) => {
        if(response) {
          console.log(response);
          return true;
        }
        return false;
      })
    );
  }

  createHistoryTask(taskRegister: TaskHistoryRegesterModel): Observable<boolean> {
    return this.apiService.create('tasksHistory', taskRegister)
    .pipe(
      map((response) => {
        if(response) {
          console.log(response);
          return true;
        }
        return false;
      })
    );
  }

  createUser(userRegister: UserRegister): Observable<boolean> {
    return this.apiService.create('user', userRegister)
    .pipe(
      map((response) => {
        if(response) {
          console.log(response);
          return true;
        }
        return false;
      })
    );
  }

  updateUser(userUpdate: UserUpdate): Observable<boolean> {
    return this.apiService.update('user', userUpdate)
    .pipe(
      map((response) => {
        if(response) {
          console.log(response);
          return true;
        }
        return false;
      })
    );
  }

    updateTask(taskUpdate: Task): Observable<boolean> {
      return this.apiService.update('tasks', taskUpdate)
      .pipe(
        map((response) => {
          if(response) {
            console.log(response);
            return true;
          }
          return false;
        })
      );
    }

    updateTaskHistory(taskUpdate: TaskHistoryUpdateModule): Observable<boolean> {
      return this.apiService.update('tasksHistory', taskUpdate)
      .pipe(
        map((response) => {
          if(response) {
            console.log(response);
            return true;
          }
          return false;
        })
      );
    }

    delete(deleteRequest: Delete): Observable<boolean> {
      return this.apiService.delete('tasks/delete', deleteRequest)
      .pipe(
        map((response) => {
          if(response) {
            console.log(response);
            return true;
          }
          return false;
        })
      );
    }

    deleteUser(id: number): Observable<boolean> {
      return this.apiService.deleteUser('user', id)
      .pipe(
        map((response) => {
          if(response) {
            console.log(response);
            return true;
          }
          return false;
        })
      );
    }

    deleteTaskHistory(id: number): Observable<boolean> {
      return this.apiService.deleteUser('tasksHistory', id)
      .pipe(
        map((response) => {
          if(response) {
            console.log(response);
            return true;
          }
          return false;
        })
      );
    }
}


