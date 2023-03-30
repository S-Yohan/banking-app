import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { bankAccount } from 'src/app/Models/bankAccount';
import { LoginService } from 'src/app/Services/login.service';

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
    address: '',
    
  }

  

  account: bankAccount = {
    id: null,
    accountNumber: null,
    type: "",
    balance: 500
  }

  current_user: User[] = this.loginService.Loggedusers;

  constructor(private userService: UserService, private loginService: LoginService,
    private accountService: AccountService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

  }

  loginUser(): User {

    this.userService.userDatabase.forEach(element => {if(element.username == this.user.username 
      && element.password == this.user.password){ this.user = element;}  })
      return this.user
    }

  invalidUser(): any {
    let u = this.loginUser();
    while (u == null) {
      alert("username or password is incorrect");
    } this.route.navigate(['/account/' +  u.id]);


  }

  
}


