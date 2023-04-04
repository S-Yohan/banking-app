import { Component, Input, OnInit } from '@angular/core';
import { bankAccount } from 'src/app/Models/bankAccount';
import { TransactionService } from 'src/app/Services/TransactionService';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, Router } from '@angular/router';
import { Transactions } from 'src/app/Models/Transactions';





@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() ngSwitch: any;


  transactiondate: Date = new Date();
  transactiontype: string = "";
  transactionamount: number = 0;

  savingsAccountNumber: number = 0;
  checkingAccountNumber: number = 0;
  savingsBalance: number = 0;
  checkingBalance: number = 0;

  transactions: Transactions[] = [];

  switch_account_display: boolean = false;

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
    public accountService: AccountService, private userService: UserService,
    private route: Router) { }


  ngOnInit(): void {
    this.user = this.userService.user;
    if (this.accountService.account.type == "savings") {
      this.savingsAccountNumber = this.accountService.account.accountNumber;
      this.savingsBalance = this.accountService.account.balance;
      this.switch_account_display = true;
    } else {
      this.checkingAccountNumber = this.accountService.account.accountNumber;
      this.checkingBalance = this.accountService.account.balance;
    }

  }


  addTransaction(): void {

  }


  routeToDeposit(): void {
    this.route.navigate(['/account/' + this.userService.user.id + '/deposit']);
  }



  transfer(): void {

  }

  billPay(): void {

  }


}










