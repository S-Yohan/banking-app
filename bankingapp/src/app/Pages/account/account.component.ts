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


  
  savingsAccountNumber: number = 0;
  checkingAccountNumber: number = 0;
  savingsBalance: number = 0;
  checkingBalance: number = 0;

  transactions: Transactions[] = this.transactionService.transactions;

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
    this.accountService.getAccountById(this.user.id).subscribe(json => { this.accountService.account = json;

      if (this.accountService.account.type == "savings") {
        this.switch_account_display = true;
        this.savingsAccountNumber = this.accountService.account.accountNumber;
        this.savingsBalance = this.accountService.account.balance;
        
      } else {
        this.checkingAccountNumber = this.accountService.account.accountNumber;
        this.checkingBalance = this.accountService.account.balance;
      }
    
    });    

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










