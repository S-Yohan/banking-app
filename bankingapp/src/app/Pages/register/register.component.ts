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
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  address: string = "";
  type: string = "";


  constructor(private accountService: AccountService,
    private userservice: UserService, private router : Router) { }

  

  ngOnInit(): void {
  }

  checkPassword(): any {
    let password = this.password;
    let confirmPassword = this.password;
    while (password != confirmPassword) {
      alert("Passwords do not match" + "\n" + "Please try again");
    }
  }

 
  onClick(): void {
    
    let user: User = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address
    }; this.userservice.createNewUser(user).subscribe(json =>{console.log(json)}) // != null ? alert("User created") : alert("User not created");
    this.checkPassword();
    this.router.navigate(['/account']);
    
  }

  addAccount(): any {
    this.accountService.createNewAccount(this.email, this.type).subscribe();
    //alert("Account created");
  }




}








