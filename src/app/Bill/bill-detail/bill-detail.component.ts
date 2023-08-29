import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent {
  modalRef: BsModalRef | undefined;
  customerId: number | undefined;
  customerBill: any[] = [];
  billForm: FormGroup;
  isButtonDisabled: boolean = true;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder , private router:Router) {
    this.billForm = this.formBuilder.group({
      customerId: ['', [Validators.required]]
    });
  }

  fetchCustomerBills() {
    this.customerBill = []; // Clear the existing bill details
    if (this.billForm.valid) {
      // Fetch customer bills based on the entered customer ID (this.customerId)
      // For demonstration purposes, let's push some mock bill details
      const mockBill = {
        id: 123,
        payableAmt: 400,
        dueAmt: 200
      };
      this.customerBill.push(mockBill);
    }
  }

  updateBill() {
     // Navigate to the update customer detail component with a parameter (example: customer ID)
     const customerId = 123; // Example customer ID
     this.router.navigate(['/updateBill']);
    // Implement your update logic here
  }

  deleteBill(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
