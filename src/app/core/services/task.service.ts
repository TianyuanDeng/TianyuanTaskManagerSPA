import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService: ApiService) { }

  getAllTasks(): Observable<Task[]> {
    return this.apiService.getAll('tasks');
  }

  getTask(id: number): Observable<Task> {
    return this.apiService.getOne('tasks', id);
  }
}
