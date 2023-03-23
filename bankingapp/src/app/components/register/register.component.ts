import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
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
