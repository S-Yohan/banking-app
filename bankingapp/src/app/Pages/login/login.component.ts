import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User ={
    
    name: '',
    email: '',
    password: '',
    address: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  loginAlter(){
    let password = document.getElementsByName("password");
    let username = document.getElementsByName("username");
    
  

    alert("Username/Passord is incorrect");//this is the alert that will pop up if the username/password is incorrect up to 3 attempts 
    //or if the account is locked. 
  }

  lockedAccount(user : User){
    
  }
    
    //after 3 failed attempts, account is locked for 5 minutes.
  

  invalidUser(){
    alert("Username/Password is incorrect");

  }

  

}


