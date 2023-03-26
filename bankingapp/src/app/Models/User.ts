export interface User{
    
    name?: string;
    email?: string; //email address is going be the username.
    password?: string;
    confirmPassword?: string;
    address?: string; //city only.
    type?: string;//had to add this to be able the opneing account type.
}