import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionService } from 'src/app/Services/TransactionService';
import { bankAccount } from 'src/app/Models/bankAccount';

@Component({
  selector: 'app-get-transaction-button',
  templateUrl: './get-transaction-button.component.html',
  styleUrls: ['./get-transaction-button.component.css']
})
export class GetTransactionButtonComponent implements OnInit {
  
  @Input()
  account: bankAccount = {
    accountNumber: "",
    type: "",
    balance: 0,
    
  }
  
  @Output()
  updateevent: EventEmitter<any> = new EventEmitter();

  constructor(private transactionservice: TransactionService) { }

  ngOnInit(): void {

  }

  getTransactions() {
    this.transactionservice.getAllTransactions(this.account.accountNumber).subscribe(
      (json) => {this.updateevent.emit(json);})
    
  }

 
}


