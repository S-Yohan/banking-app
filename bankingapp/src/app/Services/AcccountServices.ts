import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { bankAccount } from '../Models/bankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 

  constructor(private httpClient: HttpClient) { }
  existingAccounts: bankAccount [] = [];

  /**
   * return an observable which produces a response from a request to post an account type.
   */
  createNewAccount(account: bankAccount, username: any): Observable<bankAccount> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<bankAccount>(`http://127.0.0.1:9000/open-account/${username}`, account, { headers: header });
  }

  /**
   * return an observable which produces a response from a request to GET an account by id.
   * 
   */
  getAccountById(id: any): Observable<bankAccount> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<bankAccount>(`http://127.0.0.1:9000/account/${id}`, {
    });
  }
  
}
