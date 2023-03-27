import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AccountComponent } from './Pages/account/account.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { GetTransactionButtonComponent } from './components/get-transaction-button/get-transaction-button.component';
import { DepositComponent } from './Pages/deposit/deposit.component';
//import {AuthGuardGuard} from './Services/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    TransactionsComponent,
    GetTransactionButtonComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'account/:username', component: AccountComponent }, //canActivate: [AuthGuardGuard]},
      { path: 'login', component: LoginComponent }, //canActivate: [AuthGuardGuard]},
      { path: 'register', component: RegisterComponent },//, canActivate: [AuthGuardGuard] },
      { path: 'account/:username/deposit', component: DepositComponent }
    ]),

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
