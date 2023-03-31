import { Transactions } from "./Transactions";

export interface bankAccount {
    
    
    id: number;
    balance: number;
    accountNumber: number;
    type: string;
    transactions: Transactions[];

    
}