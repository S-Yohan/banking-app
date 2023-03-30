import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  

  new_user : User[] = [];
  
}
