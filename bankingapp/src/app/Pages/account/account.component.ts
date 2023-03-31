import { Component, OnInit } from '@angular/core';
import { bankAccount } from 'src/app/Models/bankAccount';
import { TransactionService } from 'src/app/Services/TransactionService';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, Router} from '@angular/router';






@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  

  savingsAccountNumber: number = 0;
  checkingAccountNumber: number = 0;
  savingsBalance: number = 0;
  checkingBalance: number = 0;


  user: User = {

    id: 0,
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    accounts: [],

  }


  constructor(private transactionService: TransactionService,
    private accountService: AccountService, private userService: UserService,
    private route: Router) { }


  ngOnInit(): void {
    this.user = this.userService.user;
    this.accountService.user_accounts.forEach((account) => {
      if (account.type == "savings") {
        this.savingsAccountNumber = account.accountNumber;
        this.savingsBalance = account.balance;
      }
      else if (account.type == "checking") {
        this.checkingAccountNumber = account.accountNumber;
        this.checkingBalance = account.balance;
      }
    });      
  }

  routeToDeposit(): void {
    this.route.navigate(['/account/'+ this.userService.user.id + '/deposit']);
  }


transfer(): void {

}

billPay(): void {

}


}










