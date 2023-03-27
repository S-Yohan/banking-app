import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common'
import { TransactionService } from 'src/app/Services/TransactionService';
import { Transactions } from 'src/app/Models/Transactions';
import { User } from 'src/app/Models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';



@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  
  depositAmount: number = 0;

  user: User = {
    id: 0,
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    loggedin: true,
  }

  transaction: Transactions = {
    transid: 0,
    transtype: "deposit",
    transamount: 0,
    account_debited: 0,
    account_credited: 0,
    date: new Date()
  }

  account: bankAccount = {
    id: 0,
    savings_accountNumber: 0,
    checking_accountNumber: 0,
    savingsbalance: 0,
    checkingbalance: 0,
  }


  
  
    constructor(private location: Location, private transactionService: TransactionService, private route: ActivatedRoute,
      private accountService: AccountService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => 
    {this.user.username= (params.get('username') as string);
  });
    }

    back(): void {
      this.location.back();
    }

    //this method is a patch request to update the account balance
    updatedeposit(): void {
      
      this.accountService.deposit(this.user.username, this.depositAmount).subscribe();
    }



    addTransaction(): void {
      let a = this.accountService.getAccountByUsername(this.user.username).subscribe(json => {return json});
      this.transaction.transamount = this.depositAmount;
      this.transaction.account_debited = 0;
      //this.transaction.account_credited = a.checking_accountNumber;
      this.transaction.date = new Date();
      this.transactionService.postNewTransaction(this.transaction, "deposit").subscribe();
    }

}
