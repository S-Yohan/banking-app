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
import { DepositComponent } from './Pages/deposit/deposit.component';
import { BillpayComponent } from './components/billpay/billpay.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PagesopenAccountComponent } from './Pages/open-account/pagesopen-account.component';
//import {AuthGuardGuard} from './Services/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    DepositComponent,
    BillpayComponent,
    TransferComponent,
    PagesopenAccountComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'account/:id', component: AccountComponent }, //canActivate: [AuthGuardGuard]},
      { path: 'login', component: LoginComponent }, //canActivate: [AuthGuardGuard]},
      { path: 'register', component: RegisterComponent },//, canActivate: [AuthGuardGuard] },
      { path: 'account/:id/deposit', component: DepositComponent },
      { path: 'account/:id/billpay', component: BillpayComponent },
      { path: 'account/:id/transfer', component: TransferComponent },
      { path: 'open-account/:id', component: PagesopenAccountComponent }
      
    ]),

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
