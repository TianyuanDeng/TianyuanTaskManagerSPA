import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Task } from 'src/app/shared/models/task';
import { taskRegister } from 'src/app/shared/models/taskRegister';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {


  taskRegister: taskRegister = {
    userId: 5,
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    remakrs: ''
  };
  
  invalidRegister: boolean = false;
  returnUrl: string | undefined;

  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
  }

  createTask() {
    console.log(this.taskRegister);
    this.authService.createTask(this.taskRegister).subscribe(
      (response) => {
        if(response) {
          this.router.navigate([this.returnUrl]);
        }
      },
      (err: any) => {
        this.invalidRegister = true;
      }
    );
  }
}
