import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../core/services/task.service';
import { UserService } from '../core/services/user.service';
import { Task } from '../shared/models/task';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskId!: number;
  taskById: Task = {
    id: 0,
    userId: 0,
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    remakrs: ''
  };

  user: User= {
    id: 0, 
    email: '',
    fullName: '',
    mobileno: '',
  };


  constructor(private taskService: TaskService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.taskId = + p.get('id');

        this.taskService.getTask(this.taskId).subscribe(
          m => {
            this.taskById = m; 
            console.log(this.taskById);
                    
            this.userService.getUser(this.taskById.userId).subscribe(
              u => {
                this.user = u;
                console.log(this.user);
              });
          });

      }
    )  
  }

}
