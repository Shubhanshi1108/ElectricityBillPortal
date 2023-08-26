import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { ComplainStatusComponent } from './complain-status/complain-status.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { UpdateCustomerDetailComponent } from './update-customer-detail/update-customer-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

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
    BillHistoryComponent,
    UpdateCustomerDetailComponent,
    NavbarComponent,
    CustomerDetailComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    ModalModule.forRoot(),  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
