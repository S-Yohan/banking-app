import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { bankAccount } from 'src/app/Models/bankAccount';
import { AccountService } from 'src/app/Services/AcccountServices';
import { UserService } from 'src/app/Services/UserService';
import { Router } from '@angular/router';
import{ RegistrationService } from 'src/app/Services/registration.service';

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


  };


  password: string = "";
  confirmPassword: string = "";


  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    balance: 500,
    type: "",

  }

  @Output() registerEvent: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router, private rs: RegistrationService,
    private userservice: UserService) { }




  ngOnInit(): void {

  }

  checkPassword(): any {
    let password = this.password;
    while (password != this.confirmPassword) {
      alert("Passwords do not match" + "\n" + "Please try again");
    } return true;
  }


  onClick(): void {
    while (this.checkPassword()) {
      this.addUser();
      this.router.navigate(['/open-account/' + this.user.id]);
    }

  }

  addUser(): any {
    this.userservice.createNewUser(this.user).subscribe(json => { console.log(json) })
    this.rs.new_user.push(this.user);
  }


}













