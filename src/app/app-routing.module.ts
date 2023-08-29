import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Logins-&-dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './Logins-&-dashboard/dashboard/dashboard.component';
import { SignupComponent } from './Logins-&-dashboard/signup/signup.component';
import { AdminLoginComponent } from './Logins-&-dashboard/admin-login/admin-login.component';
import { UserLoginComponent } from './Logins-&-dashboard/user-login/user-login.component';
import { UserDashboardComponent } from './Logins-&-dashboard/user-dashboard/user-dashboard.component';
import { RegisterComplaintComponent } from './Complaint/register-complaint/register-complaint.component';
import { ComplainStatusComponent } from './Complaint/complain-status/complain-status.component';
import { PayBillComponent } from './Customer/pay-bill/pay-bill.component';
import { PaymentModeComponent } from './Customer/payment-mode/payment-mode.component';
import { PaymentComponent } from './Customer/payment/payment.component';
import { AddBillComponent } from './Bill/add-bill/add-bill.component';
import { UpdateBillComponent } from './Bill/update-bill/update-bill.component';
import { NavbarComponent } from './Logins-&-dashboard/navbar/navbar.component';
import { BillDetailComponent } from './Bill/bill-detail/bill-detail.component';
import { CustomerDetailComponent } from './Customer/customer-detail/customer-detail.component';
import { UpdateCustomerDetailComponent } from './Customer/update-customer-detail/update-customer-detail.component';

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
  {path:'updateDetail',component:UpdateCustomerDetailComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'customerDetail',component:CustomerDetailComponent},
  {path:'billDetail',component:BillDetailComponent},
  {path:'addBill',component:AddBillComponent},
  {path:'updateBill',component:UpdateBillComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
