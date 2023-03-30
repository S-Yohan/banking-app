import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-transaction-button',
  templateUrl: './get-transaction-button.component.html',
  styleUrls: ['./get-transaction-button.component.css']
})
export class GetTransactionButtonComponent implements OnInit {
  
  
  @Output()
  updateevent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

 getTransactions(){
  this.updateevent.emit();
 }
}


