import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { TaskHistoryRegesterModel } from 'src/app/shared/models/taskHistoryRegister';

@Component({
  selector: 'app-task-history-create',
  templateUrl: './task-history-create.component.html',
  styleUrls: ['./task-history-create.component.css']
})
export class TaskHistoryCreateComponent implements OnInit {

  taskRegister: TaskHistoryRegesterModel = {
    userId: 5,
    title: '',
    description: '',
    dueDate: '',
    completed:'',
    remakrs: '',
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
        (params) => (this.returnUrl = params.returnUrl || '/user' + '/' + this.id)
      );
    }

    listern = false;
    createHistoryTask() {
      console.log(this.taskRegister);
      this.authService.createHistoryTask(this.taskRegister).subscribe(
        (response) => {
          if(response) {
            this.listern = true;
            this.router.navigate([this.returnUrl]);
          }
        },
        (err: any) => {
          this.invalidRegister = true;
        }
      );
    }

}
