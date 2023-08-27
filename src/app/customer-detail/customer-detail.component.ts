import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  constructor(private router: Router) {
    this.customerId = 0;
  }
  
  

  customerId: number;
  customerDetails: any[] = []; 

  fetchCustomerDetails() {
    const mockDetail={
      id: 2,
      name: 'Harsh Doe',
      email: 'harsh@gmail.com',
      mobileNumber: '1234367890',
      userId: 'harsh34'
    }
   // const detail = this.customers.find(customer => customer.id === this.customerId);
    this.customerDetails.push(mockDetail);
  }
 
  
  updateCustomer() {
     // Navigate to the update customer detail component with a parameter (example: customer ID)
     const customerId = 123; // Example customer ID
     this.router.navigate(['/updateDetail', customerId]);
    
  }
  
  deleteCustomer() {
    //delete logic
  }
    
}
