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

  accounts_array: bankAccount[] = [];

  constructor(private transactionService: TransactionService,
    private accountService: AccountService, private userService: UserService,
    private route: Router) { }


  ngOnInit(): void {

    let id = this.userService.user.id;
    this.accountService.getAccountById(id).subscribe(json => this.accounts_array);

    this.accounts_array.forEach(element => {
      if (element.type == "Savings") {
        this.savingsAccountNumber = element.accountNumber;
        this.savingsBalance = element.balance;
      } else {
        this.checkingAccountNumber = element.accountNumber;
        this.checkingBalance = element.balance;
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










