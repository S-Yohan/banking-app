import { Component, EventEmitter, Injectable, Injector, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { bankAccount } from 'src/app/Models/bankAccount';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteGuardService } from 'src/app/Services/route-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  user: User = {

    id: 0,
    name: "",
    username: "",
    email: "",
    password: "",
    address: "",
    accounts: [],
    loginStatus: false,

  }

  username: string = "";
  password: string = "";

  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    type: "",
    balance: 500,
    transactions: []
  }


  
  constructor(private userService: UserService,
    private accountService: AccountService, private router: ActivatedRoute, private route: Router,
    private rs: RouteGuardService) { }
  

 

  ngOnInit(): void {

  }
  /*this method is called by the login button to iterate over the userDatabase and check if the user exists.
  the user if found, is then storeed in the current user databse in the loggin service*/
  loginUser(): any {

    this.user.username = this.username;
    this.user.password = this.password;

    this.userService.getUser(this.user).subscribe((json) => {
      this.user = json; console.log(this.user);
      if(this.user != null ){
        this.userService.user = this.user;
        this.userService.user.loginStatus = true;
        this.route.navigate(['/account/' + this.user.id]);
      } else {
        window.alert("User/password incorrect" + "/n" + "Please try again");
      }
            
    });       
      return this.user;    

  }


}









