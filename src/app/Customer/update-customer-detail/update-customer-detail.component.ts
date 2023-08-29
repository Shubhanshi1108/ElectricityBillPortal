import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

function mobileNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = /^[0-9]{10}$/; // Match exactly 10 digits
  if (!pattern.test(control.value)) {
    return { 'invalidMobileNumber': true };
  }
  return null;
}

@Component({
  selector: 'app-update-customer-detail',
  templateUrl: './update-customer-detail.component.html',
  styleUrls: ['./update-customer-detail.component.css']
})
export class UpdateCustomerDetailComponent {
  updateUserForm!: FormGroup;
  modalRef: BsModalRef | undefined;

  constructor(private fb: FormBuilder, private modalService: BsModalService, private route: ActivatedRoute) { }
  isNavigatedFromCustomerDetail: boolean = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      this.isNavigatedFromCustomerDetail = params['source'] === 'updateDetail';
      console.log('isNavigatedFromCustomerDetail:', this.isNavigatedFromCustomerDetail);
    });
      this.updateUserForm = this.fb.group({
        mobNumber: ['', [Validators.required, mobileNumberValidator]],
        emailAdd: ['', [Validators.required, Validators.email]],

      });


      // Access the parameter value from the route
      this.route.params.subscribe(params => {
        const customerId = +params['id']; // Convert the parameter to a number
        // Use the customer ID for further actions, e.g., populate the form or fetch customer details
        this.populateFormWithCustomerData(customerId); // Replace this with your actual method
      });
    }

  populateFormWithCustomerData(customerId: number) {
      // Find the customer with the specified ID from the mock customerDetails array
      const customerData = [
        {
          id: 1,
          mobileNumber: 478349999,
          email: 'shubhi@gmail.com'
        }
      ]; // this.customerDetails.find(customer => customer.id === customerId);

      if(customerData) {
        this.updateUserForm.patchValue({
          mobNumber: customerData[0].mobileNumber,
          emailAdd: customerData[0].email,
          // Other form controls...
        });
      } else {
        console.log(`Customer with ID ${customerId} not found.`);
      }
    }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
