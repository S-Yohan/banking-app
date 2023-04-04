import { Injectable } from '@angular/core';
import { UserService } from './UserService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private us: UserService) { }

  public isLoggedIn(): boolean {
    let status = false;
    if (this.us.user.loginStatus == true) {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }
}
