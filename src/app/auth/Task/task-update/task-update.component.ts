import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { Task } from 'src/app/shared/models/task';
import { taskRegister } from 'src/app/shared/models/taskRegister';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  users! : User[];

  taskRegister: Task = {
    id: 0,
    userId: 0,
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
    this.userService.getAllUsers().subscribe((u) => {
      console.log('called user service');
      this.users = u;
    });
    
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
  }

  updateTask() {
    console.log(this.taskRegister);
    this.authService.updateTask(this.taskRegister).subscribe(
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
