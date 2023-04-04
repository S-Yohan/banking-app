import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  user: User = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    accounts: [],
    loginStatus: false,
  }

  
  createNewUser(user : User):Observable<User>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<User>(`http://127.0.0.1:9000/register`, user, {headers:header});
  }
  
  getUser(user: User):Observable<User>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<User>(`http://127.0.0.1:9000/login`, user , {headers:header});
 
  }

}
