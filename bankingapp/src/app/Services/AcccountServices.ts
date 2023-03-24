import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { bankAccount } from '../Models/bankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  /**
   * return an observable which produces a response from a request to post an account type.
   */
  createNewAccount (email: String, type : String ):Observable<bankAccount>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<bankAccount>(`http://127.0.0.1:9000/account/${email}/${type}`, {headers:header});
  }

  /**
   * return an observable which produces a response from a request to GET a list of transactions.
   * 
   */
  getTransactions (id: number):Observable<bankAccount>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<bankAccount>(`http://127.0.0.1:9000/login/${id}`, {headers:header});
  }

  /**
   * return an observable which produces a response from a request to patch a deposit amount to an account using account nuumber.
   */
  depositToAccount(id : number, deposit : number) : Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<bankAccount>(`http://127.0.0.1:9000/account/${id}/${deposit}`, {headers:header});//will need exact parameter
    
  }
}
