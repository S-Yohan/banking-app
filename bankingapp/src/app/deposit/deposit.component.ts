import { Component, EventEmitter, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  @Output() depositEvent: EventEmitter<any> = new EventEmitter();
  depositAmount: number = 0;

  
  
    constructor() { }
  
    ngOnInit(): void {
    }

    updatedeposit(): void {
      this.depositEvent.emit(this.depositAmount);
    }

}
