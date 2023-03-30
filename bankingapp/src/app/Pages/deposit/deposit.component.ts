import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'
import { TransactionService } from 'src/app/Services/TransactionService';
import { Transactions } from 'src/app/Models/Transactions';
import { User } from 'src/app/Models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AccountService } from 'src/app/Services/AcccountServices';
import { DepositServiceService } from 'src/app/Services/deposit-service.service';
import { bankAccount } from 'src/app/Models/bankAccount';



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
  };

  user: User = {
    id: 0,
    username: "",
    password: "",
    name: "",
    address: "",
    email: ""
  }


  constructor(private location: Location, private route: ActivatedRoute,
    private depositService: DepositServiceService,
    private accountService: AccountService,
    private transactionService: TransactionService) { }




  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user.id = (params.get('id') as string);
      this.account.type = (params.get('transtype') as string);
    });
  }

  back(): void {
    this.location.back();
  }

  /*this method is a patch request to update the account balance.
  addTransaction() is called here as well as the back navigation provided the deposit amount
  is greater than 0*/

  updatedeposit(): void {
    if (this.depositAmount > 0) {
      this.accountService.existingAccounts.forEach(element => {
        if (element.id == (this.user.id as number)) {
          element.balance += this.depositAmount;
          element.accountNumber = this.account.accountNumber;
        }
      });
    } else { alert("Please enter a valid amount") };

  }


  /*this method is a post request to add a new transaction to the transaction table
  */
  addTransaction(): void {


    let transaction: Transactions = {
      transid: null,
      account_debited: this.account.accountNumber,
      account_credited: null,
      transtype: this.account.type,
      transamount: this.depositAmount,
      date: new Date(),
    }; this.transactionService.postNewTransaction(transaction, this.account.type, this.user.id).subscribe();
  }



}
