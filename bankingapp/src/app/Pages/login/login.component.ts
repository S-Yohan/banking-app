import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {

    name: '',
    email: '',
    password: '',
    address: ''
  }
  
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {

  }

  loginUser() {

    this.userService.logInUser(this.user).subscribe(
      (json) => {
        this.user = json;
      }
    ); return null;
  }

  invalidUser() {
    let count = 0;
    while (this.loginUser() == null && count < 4) {
      alert("Username/Password is incorrect" + "\n" + "Please try again");
      count++;
    } if(this.loginUser == null){
      alert("You have exceeded the number of attempts" + "\n" + "Please try again in 5 minutes" 
    + "\n" + "Or contact customer service");
    } else{
      this.router.navigate(['/account']);
    }


  }



}


