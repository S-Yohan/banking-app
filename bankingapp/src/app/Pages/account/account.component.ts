import { Component, OnInit } from '@angular/core';
import { bankAccount } from 'src/app/Models/bankAccount';
import { Transactions } from 'src/app/Models/Transactions';
import { TransactionService } from 'src/app/Services/TransactionService';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: bankAccount = {
    accountNumber: "",
    balance: 0,
    type: ""
  };

  balance: number = 0;
  accountNumber: string = "";

  transaction: Transactions = {
    transid: 0,
    transtype: "",
    transamount: 0,
    account_posted_to: 0,
    date: new Date()
  }





  constructor(private transactionService: TransactionService) { }


  ngOnInit(): void {
    this.balance = this.account.balance;
    this.accountNumber = this.account.accountNumber;
    this.transaction.transtype, this.transaction.transamount;
    this.transaction.account_posted_to;


  }

  deposit(): void { 
    
  }

  transfer(): void { 

  }

  billPay(): void {

   }

  addTransaction(): void {
    this.transactionService.postNewTransaction(this.transaction).subscribe(
      (json) => {
        this.account = json; console.log(json);
      }
    );
  }



}


