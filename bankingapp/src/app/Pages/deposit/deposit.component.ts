import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'
import { TransactionService } from 'src/app/Services/TransactionService';
import { Transactions } from 'src/app/Models/Transactions';
import { User } from 'src/app/Models/User';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { DepositServiceService } from 'src/app/Services/deposit-service.service';
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

  user: User = {
    id: 0,
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    accounts: [],
  }


  constructor(private location: Location,  private depositService: DepositServiceService,
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
      this.depositService.deposit(this.accountService.account, this.userservice.user.id, ).subscribe(
        json => { this.account = json; console.log(this.account); 
          this.accountService.account = this.account;
        this.addTransaction();
        ;});
    } else { alert("Please enter a valid amount") };

  }


  /*this method is a post request to add a new transaction to the transaction table
  */
  addTransaction(): void {


    let transaction: Transactions = {
      transid: null,
      account_debited: this.account.accountNumber,
      account_credited: 0,
      transtype: "deposit",
      transamount: this.depositAmount,
      date: new Date(),
    }; this.transactionService.postNewTransaction(transaction, transaction.transtype, this.account.id).subscribe();
  }



}
