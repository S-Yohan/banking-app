import { Component, OnInit } from '@angular/core';
import { bankAccount } from 'src/app/Models/bankAccount';
import { Transactions } from 'src/app/Models/Transactions';
import { TransactionService } from 'src/app/Services/TransactionService';
import { DepositComponent } from 'src/app/deposit/deposit.component';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: bankAccount = {
    savings_accountNumber: 0,
    checking_accountNumber: 0,
    savingsbalance: 0,
    checkingbalance: 0,

  };



  transaction: Transactions = {
    transid: 0,
    transtype: "",
    transamount: 0,
    account_debited: 0,
    account_credited: 0,
    date: new Date()
  }





  constructor(private transactionService: TransactionService,
    private accountService: AccountService, private userService: UserService) { }


  ngOnInit(): void {
    this.account.checkingbalance = 500;
    this.account.savingsbalance = 0;
  }

  setClientAccount(eventData: any) {
    this.accountService.getAccountById(eventData.id).subscribe(json => this.account = json);

  }

  deposit(eventData: { depositAmount: number }) {
    this.account.checkingbalance += eventData.depositAmount;
    
    this.transaction.transtype = "Deposit";
    this.transaction.transamount = eventData.depositAmount;
    this.transaction.account_debited = this.account.checking_accountNumber;
  }
  transfer(): void {

  }

  billPay(): void {

  }

  addTransaction(): void {
    
    this.transactionService.postNewTransaction(this.transaction, this.transaction.transtype).subscribe(
      (json) => {
        this.transaction = json; console.log(json);
      }
    );
  }



}


