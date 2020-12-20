import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users!: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((u) => {
      console.log('called user service');
      this.users = u;
    });
  }

}
