import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'
import { TransactionService } from 'src/app/Services/TransactionService';
import { Transactions } from 'src/app/Models/Transactions';
import { User } from 'src/app/Models/User';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { bankAccount } from 'src/app/Models/bankAccount';
import { UserService } from 'src/app/Services/UserService';



@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {


  depositAmount: number = 0;

  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    balance: 0,
    type: "",
    transactions: []
  };

  transaction: Transactions = {
    transid: null,
    account_debited: 0,
    account_credited: 0,
    transtype: "deposit",
    transamount: 0,
    timestamp: null,
  };


    constructor(private location: Location,
      private accountService: AccountService, private transactionService: TransactionService,
      private userservice: UserService, private route: Router) { }




  ngOnInit(): void {

    }

  back(): void {
      this.location.back();
    }
  /*this method is a patch request to update the account balance.
  addTransaction() is called here as well as the back navigation provided the deposit amount
  is greater than 0
  The this.accountService.account is also updated*/


  updatedeposit(): void {
      if (this.depositAmount > 0) {
        this.accountService.account.balance += this.depositAmount;
        this.addTransaction();

      } else { alert("Please enter a valid amount") };

    }


  /*this method is a post request to add a new transaction to the transaction table
  */
  addTransaction(): void {

    this.transaction.account_credited = this.accountService.account.accountNumber;
    this.transaction.transamount = this.depositAmount;

    this.transactionService.postNewTransaction(this.transaction, this.transaction.transtype, this.userservice.user.id).subscribe(
      json => {this.transaction = json;
        this.transactionService.transactions.push(this.transaction);
        this.back();
      }
    );
  }



}
