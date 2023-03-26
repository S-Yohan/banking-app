import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Transactions } from '../Models/Transactions';


@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  transaction: Transactions [] = [];
  constructor(private httpClient : HttpClient) { }

  
  getAllTransactions(accnum: Number):Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<any>(`http://127.0.0.1:9000/account/${accnum}`, {headers:header});
  }
  
  postNewTransaction(transaction : any):Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<any>(`http://127.0.0.1:9000/account/${transaction}`, {transaction}, {headers:header});
  }
 
}