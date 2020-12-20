import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskHistory } from 'src/app/shared/models/taskHistory';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskHistoryService {

  constructor(private apiService: ApiService) { }

  getTask(id: number): Observable<TaskHistory[]> {
    return this.apiService.getAllByGenre('TasksHistory', id);
  }
}
