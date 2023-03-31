import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { bankAccount } from 'src/app/Models/bankAccount';


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
    accounts: []

  }



  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    type: "",
    balance: 500,
    transactions: []
  }



  constructor(private userService: UserService,
    private accountService: AccountService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

  }
  /*this method is called by the login button to iterate over the userDatabase and check if the user exists.
  the user if found, is then storeed in the current user databse in the loggin service*/
  loginUser(): void {

    this.userService.getUser(this.user).subscribe((json) => {this.user = json; console.log(this.user);
      this.userService.user = this.user;
      this.accountService.getAccountById(this.user.id).subscribe((json) => this.accountService.user_accounts = json);
      
    });
    
    
  }

  /*this method is called by the login button to navigate to check and alert the user if the password or username are incorrect
  The next page is navigated.*/
  invalidUser(): any {
    
    if (this.user.username == "" || this.user.password == "" || this.loginUser() == null
    ) {alert("Invalid Username or Password" + "/" + "Please try again"); 
    } else{ this.route.navigate(['/account/' + this.user.id]);};


  }


}


