import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Logins-&-dashboard/dashboard/dashboard.component';
import { SignupComponent } from './Logins-&-dashboard/signup/signup.component';
import { AdminLoginComponent } from './Logins-&-dashboard/admin-login/admin-login.component';
import { UserLoginComponent } from './Logins-&-dashboard/user-login/user-login.component';
import { RegisterComplaintComponent } from './Complaint/register-complaint/register-complaint.component';
import { AdminDashboardComponent } from './Logins-&-dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Logins-&-dashboard/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { ComplainStatusComponent } from './Complaint/complain-status/complain-status.component';
import { PayBillComponent } from './Customer/pay-bill/pay-bill.component';
import { PaymentComponent } from './Customer/payment/payment.component';
import { PaymentModeComponent } from './Customer/payment-mode/payment-mode.component';
import { UpdateCustomerDetailComponent } from './Customer/update-customer-detail/update-customer-detail.component';
import { NavbarComponent } from './Logins-&-dashboard/navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './Customer/customer-detail/customer-detail.component';
import { BillDetailComponent } from './Bill/bill-detail/bill-detail.component';
import { AddBillComponent } from './Bill/add-bill/add-bill.component';
import { UpdateBillComponent } from './Bill/update-bill/update-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    AdminLoginComponent,
    UserLoginComponent,
    RegisterComplaintComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ComplainStatusComponent,
    PayBillComponent,
    PaymentComponent,
    PaymentModeComponent,
    UpdateCustomerDetailComponent,
    NavbarComponent,
    CustomerDetailComponent,
    BillDetailComponent,
    AddBillComponent,
    UpdateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    ModalModule.forRoot(),  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
