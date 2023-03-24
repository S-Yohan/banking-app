import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/Models/Transactions';
import { TransactionService } from 'src/app/Services/TransactionService';
import {bankAccount} from 'src/app/Models/bankAccount';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  
  transactions : Transactions [] = [];
  
  
  

  constructor (private transactionService : TransactionService) { }

  ngOnInit(): void {

  }

  
}


