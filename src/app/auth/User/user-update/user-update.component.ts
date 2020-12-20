import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { UserUpdate } from 'src/app/shared/models/userUpdate';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id: number;
  
  returnUrl: any;
  invalidRegister: boolean = false;
  
  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/'));
      this.route.paramMap.subscribe(
        p => {
          this.id = + p.get('id')});
  }

  user : UserUpdate = {
    id: 0, 
    password: '',
    email: '',
    fullname: '',
    mobileno: '',
  };

  updateUser() {
    console.log(this.user);
    this.authService.updateUser(this.user).subscribe(
      (response) => {
        if(response) {
          this.router.navigate([this.returnUrl]);
          window.location.reload();
        }
      },
      (err: any) => {
        this.invalidRegister = true;
      }
    );
  }
}
