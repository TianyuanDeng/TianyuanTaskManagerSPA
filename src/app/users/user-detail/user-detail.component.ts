import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { TaskHistoryService } from 'src/app/core/services/task-history.service';
import { UserService } from 'src/app/core/services/user.service';
import { TaskHistory } from 'src/app/shared/models/taskHistory';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  user: User = {
    id: 0, 
    email: '',
    fullName: '',
    mobileno: '',
  };

  task: TaskHistory = {
    taskId: 0,
    userId: 0,
    title: '',
    description: '',
    dueDate: '',
    completed:'',
    remarks: '',
  };

  id!: number;

  tasksHistory: TaskHistory[];
  invalidGetData = false;
  invalidDelete = false;
  failDelete = false;
  load = false;

  returnUrl: any;
  resp: any;

  constructor(private userService: UserService,
    private taskHistoryService: TaskHistoryService,
    private authService: AuthenticationService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
        p => {
          this.id = + p.get('id');

          this.userService.getUser(this.id).subscribe(
            u => {
              this.user = u;
              console.log(this.user);

              this.taskHistoryService.getTask(this.id).subscribe(
                th => {
                  this.tasksHistory = th;
                  console.log(this.tasksHistory);
                  this.invalidGetData = false;
                }, (err: any) => {
                  this.invalidGetData = true;
                });

                this.route.queryParams.subscribe(
                  (params) => (this.returnUrl = params.returnUrl || '/'));
            });     
        })
    }

    closeResult = '';
    deletedId!: number;
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${this.closeResult}`;
        console.log(this.deletedId);

        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  

    deleteUser() {
      this.authService.deleteUser(this.id).subscribe((response) => {
        if(response) {
          window.location.reload();
          this.router.navigate(['this.returnUrl']);
        }
      },
      (err: any) => {
        this.invalidDelete = true;}
      );
    }

    listenter = false;
    deleteTask() {
      if (this.tasksHistory.find(element => element.taskId == this.deletedId)){
        this.invalidDelete = true;
      }else {
        this.failDelete = true;
      }

      this.authService.deleteTaskHistory(this.deletedId).subscribe((response) => {

      })
      window.location.reload();
    }
}
