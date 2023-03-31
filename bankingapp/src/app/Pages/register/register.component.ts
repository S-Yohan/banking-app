import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { bankAccount } from 'src/app/Models/bankAccount';
import { UserService } from 'src/app/Services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    accounts: []


  };


  password: string = "";
  confirmPassword: string = "";


  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    balance: 500,
    type: "",
    transactions: []

  }

  @Output() registerEvent: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router,
    private userservice: UserService) { }




  ngOnInit(): void {

  }




  onClick(): void {
    //while (this.checkPassword()) {
    this.addUser();
    this.router.navigate(['/open-account/' + this.user.id]);
  //}

  }

addUser(): void {
  this.userservice.createNewUser(this.user).subscribe(json => {console.log(json);
  this.userservice.user = json;  
  } );
  


}












}
