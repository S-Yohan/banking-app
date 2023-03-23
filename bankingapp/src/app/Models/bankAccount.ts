export interface bankAccount {
    id: number; //foreign key that references the user id.
    type: string;
    account_number: number;
    balance: number;
}