import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AccountComponent } from './Pages/account/account.component';
import { DepositComponent } from './Pages/deposit/deposit.component';
import { PagesopenAccountComponent } from './Pages/open-account/pagesopen-account.component';
import { RouteGuardService } from './Services/route-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account/:id', component: AccountComponent, canActivate: [RouteGuardService] },
  {path: 'account/:id/deposit', component: DepositComponent, canActivate: [RouteGuardService]},
  {path: 'open-account/:id', component: PagesopenAccountComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, RegisterComponent, AccountComponent, DepositComponent, PagesopenAccountComponent]
