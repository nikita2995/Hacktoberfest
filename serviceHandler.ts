import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user.model';



@Injectable({

 providedIn: 'root'

})

export class UserService {

 private apiUrl = 'https://localhost:8082/api/users/profile';



 constructor(private http: HttpClient) { }



 getUsers(): Observable<User[]> {

   return this.http.get<User[]>(this.apiUrl)

 }

}
