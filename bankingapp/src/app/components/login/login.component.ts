import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginAlter(){
    alert("Username/Passord is incorrect");//this is the alert that will pop up if the username/password is incorrect up to 3 attempts 
    //or if the account is locked. 
  }

  lockedAccount(){
    alert("Account is locked");
    //after 3 failed attempts, account is locked for 5 minutes.
  }

  invalidUser(){
    alert("Username/Password is incorrect");

  }

}


