import { Component, Inject, Input, OnInit } from '@angular/core';
import { Transactions } from 'src/app/Models/Transactions';
import { AccountService } from 'src/app/Services/AcccountServices';
import { TransactionService } from 'src/app/Services/TransactionService';
import { UserService } from 'src/app/Services/UserService';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})


export class TransactionsComponent implements OnInit {

  
  transactions: Transactions[] = [];
  
  transaction: Transactions = {
    transid: 0,
    account_debited: 0,
    account_credited: 0,
    transtype: "",
    transamount: 0,
    date: new Date(),
  }
  
  

  constructor (private transactionService : TransactionService, private userService: UserService,
    private ac: AccountService) { }

  ngOnInit(): void {
    this.updateTransactions();
  }

  updateTransactions(){
    this.transactionService.getAllTransactions(this.userService.user.id).subscribe(
      (json) => {this.transactions = json;
        
      }
    );
  }

  
}



