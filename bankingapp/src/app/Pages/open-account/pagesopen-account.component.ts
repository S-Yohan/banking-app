import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';
import { RegistrationService } from 'src/app/Services/registration.service';


@Component({
  selector: 'app-pagesopen-account',
  templateUrl: './pagesopen-account.component.html',
  styleUrls: ['./pagesopen-account.component.css']
})
export class PagesopenAccountComponent {

  account: bankAccount = {
    id: null,
    accountNumber: null,
    type: "",
    balance: 500
  }



  constructor(private router: Router, private accountService: AccountService,
    private rs: RegistrationService) { }

  
  

  onClick() {
    this.postAccount();
    alert("Account Opened Successfully");
    this.router.navigate(['account/' + this.rs.new_user[0].id]);

  }

  postAccount(): void {
    this.accountService.createNewAccount(this.account, this.rs.new_user[0].id).subscribe((json) => {
      this.account = json;
      console.log(this.account);
      this.accountService.existingAccounts.push(this.account);
    });
    

  }

}
