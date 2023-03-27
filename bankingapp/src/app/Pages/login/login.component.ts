import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    address: ''
  }
  
  @Output() updateevent = new EventEmitter<any>();
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

  invalidUser(): any {
    let count = 0;
    this.loginUser();
    while (this.loginUser() == null && count < 4) {
      alert("Username/Password is incorrect" + "\n" + "Please try again");
      count++;
    } if(this.loginUser == null){
      alert("You have exceeded the number of attempts" + "\n" + "Please try again in 5 minutes" 
    + "\n" + "Or contact customer service");
    } 
    this.updateevent.emit(this.user);
    this.router.navigate(['/account/'+ this.user.username]);
    


  }



}


