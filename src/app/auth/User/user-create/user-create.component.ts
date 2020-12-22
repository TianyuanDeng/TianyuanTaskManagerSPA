import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { UserRegister } from 'src/app/shared/models/userRegister';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  user : UserRegister = {
    password: '',
    email: '',
    fullname: '',
    mobileno: '',
  };
  returnUrl: any;
  invalidRegister: boolean = false;
  
  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
  }

  createUser() {
    console.log(this.user);
    this.authService.createUser(this.user).subscribe(
      (response) => {
        if(response) {
          this.router.navigate([this.returnUrl]).then(() => {
            window.location.reload();
          });;
        }
      },
      (err: any) => {
        this.invalidRegister = true;
      }
    );
  }
}
