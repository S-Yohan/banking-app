import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    loggedin: false,

  };


  password: string = "";
  confirmPassword: string = "";


  account: bankAccount = {
    savings_accountNumber: 0,
    checking_accountNumber: 0,
    checkingbalance: 500,
    savingsbalance: 0,

  }

  @Output() registerEvent: EventEmitter<any> = new EventEmitter();


  constructor(private accountService: AccountService,
    private userservice: UserService, private router: Router) { }



  ngOnInit(): void {

  }

  checkPassword(): any {
    let password = this.password;
    while (password != this.confirmPassword) {
      alert("Passwords do not match" + "\n" + "Please try again");
    } return true;
  }


  onClick(): void {
    while (this.checkPassword()) {
      this.addUser();
      this.addAccount();
      this.router.navigate(['/account/' + this.user.username]);
    }

  }

  addUser(): any {
    this.userservice.createNewUser(this.user).subscribe(json => { console.log(json) })
  }

  addAccount(): any {
    this.accountService.createNewAccount(this.account, this.user.username).subscribe(json => { console.log(json) });
  }
}













