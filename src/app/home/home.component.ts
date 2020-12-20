import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../core/services/authentication.service';
import { TaskService } from '../core/services/task.service';
import { Delete } from '../shared/models/delete';
import { Task } from '../shared/models/task';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams }  from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult = '';

  tasks!: Task[];

  deleteRequest: Delete = {
    userId: 0,
    taskId: 0
  }
  
  invalidRegister: boolean = false;

  constructor(private taskService: TaskService,
    private modalService: NgbModal,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((t) => {
      console.log('called home service');
      this.tasks = t;
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${this.closeResult}`;
      console.log(this.deleteRequest);
      this.authService.delete(this.deleteRequest).subscribe(
        (response) => {}
      );
    })
  }

 
  deleteTask() {
    console.log(this.deleteRequest);
  }

}
