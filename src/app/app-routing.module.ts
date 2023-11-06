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
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { AllUserComponent } from './components/admin/all-user/all-user.component';
import { QueryComponent } from './components/admin/query/query.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { TransactionComponent } from './components/admin/transaction/transaction.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { AccountrequestComponent } from './components/admin/accountrequest/accountrequest.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:MainPageComponent},
  {path:'home/register', component:RegisterComponent},
  {path:'home/login', component:LoginPageComponent},
  {path:'home/login/admin', component:AdminLoginComponent},
  {path:'admin/:id', component:AdminhomeComponent},
  {path:'user/:id', component:UserPageComponent},
  {path:'requests', component:NewRequestsComponent},
  {path:'user/:userId/deposit', component:DepositComponent},
  {path:'user/:userId/withdraw', component:WithdrawComponent},
  {path:'user/:userId/transfer', component:TransferMoneyComponent},
  {path:'user/:userId/passbook', component:ShowPassbookComponent},
  // {path:'**', component:PageNotFoundComponent},
  { path: 'all-user', component: AllUserComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'query', component: QueryComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'delete-user/:id', component: UpdateUserComponent },
  { path: 'accountrequest', component: AccountrequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

 