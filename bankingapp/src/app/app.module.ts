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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    TransactionsComponent,
    GetTransactionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: 'account', component: AccountComponent},
      {path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
