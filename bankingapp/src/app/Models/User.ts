import { bankAccount } from "./bankAccount";

export interface User{
    
    id: number;
    name: string;
    email: string; 
    username: string;
    password: string;
    address: string;
    accounts: bankAccount[];
    loginStatus: boolean;
    
}