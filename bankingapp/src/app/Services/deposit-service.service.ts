import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { bankAccount } from '../Models/bankAccount';

@Injectable({
  providedIn: 'root'
})
export class DepositServiceService {


  constructor(private http: HttpClient) { }

  deposit(account: bankAccount, id: number ): Observable<bankAccount> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.put<bankAccount>(`http://localhost:9000/account/${id}/deposit`,  account, { headers: header });
  }




}
