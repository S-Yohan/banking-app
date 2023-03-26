import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    type: ""
  };

  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  address: string = "";
  type: string = "";

  


  constructor(private accountService: AccountService,
    private userservice: UserService, private router: Router) { }



  ngOnInit(): void {
        
  }

  checkPassword(): any {
    let password = this.password;
    let confirmPassword = this.password;
    while (password != confirmPassword) {
      alert("Passwords do not match" + "\n" + "Please try again");
    } return true;
  }


  onClick(): void {
    while (this.checkPassword()) {
      this.addUser();
      this.addAccount();
      this.router.navigate(['/account']);
    }

  }

  addUser(): any {
     this.userservice.createNewUser(this.user).subscribe(json => { console.log(json) })
  }

  addAccount(): any {
    this.accountService.createNewAccount(this.user.name,this.user.type).subscribe(json => { console.log(json) });
  }
}













