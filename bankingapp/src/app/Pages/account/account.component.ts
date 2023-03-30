import { Component, OnInit } from '@angular/core';
import { bankAccount } from 'src/app/Models/bankAccount';
import { TransactionService } from 'src/app/Services/TransactionService';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';





@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    balance: 0,
    type: "",

  };

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
    email: ""

  }


  constructor(private transactionService: TransactionService,
    private accountService: AccountService, private userService: UserService, 
    private loginService: LoginService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user.id = params.get('id');
    }); this.accountService.existingAccounts.forEach(element => {
      if (element.id == this.user.id) {
        this.account = element;
      }
    }); if(this.account.type == "Savings"){
      this.savingsAccountNumber = this.account.accountNumber;
      this.savingsBalance = this.account.balance;
    } else if(this.account.type == "Checking"){
      this.checkingAccountNumber = this.account.accountNumber;
      this.checkingBalance = this.account.balance;
    }
  }

  
  transfer(): void {

  }

  billPay(): void {

  }

  



}


