import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  modalRef: BsModalRef | undefined;

  constructor(private router: Router,private modalService: BsModalService) {
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
     this.router.navigate(['/updateDetail'], { queryParams: { source: 'updateDetail' } });

    
  }
  
  
  deleteCustomer(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
    
}
