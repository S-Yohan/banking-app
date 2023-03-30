import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepositServiceService {


  constructor(private http: HttpClient) { }

  deposit(id: number, depositAmount: number): Observable<any> {
    return this.http.put(`http://localhost:4200/account/${id}/deposit`, { balance: depositAmount });
  }

  

  
}
