import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { bankAccount } from 'src/app/Models/bankAccount';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  bankaccount : bankAccount = {
    id: 0,
    type: '',
    account_number: 0,
    balance: 0
  }

  user : User ={
    id: 0,
    name: '',
    email: '',
    password: '',
    address: ''
  }
  
    constructor() { }
  
    ngOnInit(): void {
    }

    checkPassword(){
      let password = document.getElementById("password");
      let confirmPassword = document.getElementById("confirmPassword");//check to ensure 
      if(password != confirmPassword){
        alert("Passwords do not match");
      }
    }

    

}
