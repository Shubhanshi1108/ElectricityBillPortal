import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { ComplainStatusComponent } from './complain-status/complain-status.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { UpdateCustomerDetailComponent } from './update-customer-detail/update-customer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {path:'dashboard',component: DashboardComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'userDashboard',component:UserDashboardComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'registerComplain',component:RegisterComplaintComponent},
  {path:'complainStatus',component:ComplainStatusComponent},
  {path:'payBill',component:PayBillComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentMode',component:PaymentModeComponent},
  {path:'billHistory',component:BillHistoryComponent},
  {path:'updateDetail',component:UpdateCustomerDetailComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'customerDetail',component:CustomerDetailComponent},
  {path:'billDetail',component:BillDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
