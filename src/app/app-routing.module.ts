import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { DepositComponent } from './components/user/deposit/deposit.component';
import { ShowPassbookComponent } from './components/user/show-passbook/show-passbook.component';
import { WithdrawComponent } from './components/user/withdraw/withdraw.component';
import { TransferMoneyComponent } from './components/user/transfer-money/transfer-money.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { NewRequestsComponent } from './components/admin/new-requests/new-requests.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:MainPageComponent},
  {path:'home/register', component:RegisterComponent},
  {path:'home/login', component:LoginPageComponent},
  {path:'home/login/admin', component:AdminLoginComponent},
  {path:'admin/:id', component:AdminPageComponent},
  {path:'user/:id', component:UserPageComponent},
  {path:'requests', component:NewRequestsComponent},
  {path:'user/:userId/deposit', component:DepositComponent},
  {path:'user/:userId/withdraw', component:WithdrawComponent},
  {path:'user/:userId/transfer', component:TransferMoneyComponent},
  {path:'user/:userId/passbook', component:ShowPassbookComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

 