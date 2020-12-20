import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { TaskHistory } from 'src/app/shared/models/taskHistory';
import { TaskHistoryUpdateModule } from 'src/app/shared/models/taskHistoryUpdateModule';


@Component({
  selector: 'app-task-history-update',
  templateUrl: './task-history-update.component.html',
  styleUrls: ['./task-history-update.component.css']
})
export class TaskHistoryUpdateComponent implements OnInit {
  taskRegister: TaskHistoryUpdateModule = {
    id: 0,
    userId: 0,
    title: '',
    description: '',
    dueDate: '',
    completed:'',
    remarks: '',
  };

  invalidRegister: boolean = false;
  returnUrl!: string;

  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

    id!: number;
    ngOnInit(): void {
      this.route.paramMap.subscribe(
        p => {this.id = + p.get('id')});

      this.route.queryParams.subscribe(
        (params) => (this.returnUrl = params.returnUrl || '/')
      );
    }

    updateHistoryTask() {
      console.log(this.taskRegister);
      this.authService.updateTaskHistory(this.taskRegister).subscribe(
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
