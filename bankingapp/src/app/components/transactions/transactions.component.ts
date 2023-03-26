import { Component, Inject, Input, OnInit } from '@angular/core';
import { Transactions } from 'src/app/Models/Transactions';
import { TransactionService } from 'src/app/Services/TransactionService';
import { UserService } from 'src/app/Services/UserService';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})


export class TransactionsComponent implements OnInit {

  
  transactions: Transactions [] = this.transactionService.transaction;
  
  @Input()
  transaction: Transactions = {
    transid: 0,
    account_posted_to: 0,
    transtype: "",
    transamount: 0,
    date: new Date(),
  }
  
  

  constructor (private transactionService : TransactionService, private userService: UserService) { }

  ngOnInit(): void {
    //working on displaying transactions from child component <app-get-transaction-button>
    
  }

  updateTransactions(){
    this.transactionService.getAllTransactions(this.transaction.account_posted_to).subscribe(
      (json) => {
        this.transactions = json;
      }
    );
  }
}



