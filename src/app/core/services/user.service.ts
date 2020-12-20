import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUsers(): Observable<User[]>{
    return this.apiService.getAll('user')
  }

  getUser(id: number) : Observable<User>{
    return this.apiService.getOne('user', id)
  }

}
