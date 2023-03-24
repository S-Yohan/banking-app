import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/Services/TransactionService';
import { bankAccount } from 'src/app/Models/bankAccount';
import { Transactions } from 'src/app/Models/Transactions';

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

  }

  type: string = "";
  balance: number = 0;
  accountNumber: string = "";


  constructor() { }


  ngOnInit(): void {

  }

  deposit(): void { }

 

}


