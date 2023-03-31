import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';


@Component({
  selector: 'app-pagesopen-account',
  templateUrl: './pagesopen-account.component.html',
  styleUrls: ['./pagesopen-account.component.css']
})
export class PagesopenAccountComponent {

  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    type: "",
    balance: 500,
    transactions: []
  }



  constructor(private router: Router, private accountService: AccountService, private userService: UserService) { }

  
  

  onClick() {
    this.postAccount();
    alert("Account Opened Successfully");
    this.router.navigate(['login']);

  }


  postAccount(): void {
    
    this.accountService.createNewAccount(this.account, this.userService.user.id).subscribe((json) => {
      this.accountService.account = json;     
      console.log(this.accountService.account);
      
      
    });
    

  }

}
