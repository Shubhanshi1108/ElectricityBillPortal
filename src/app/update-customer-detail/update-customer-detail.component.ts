import { Component, TemplateRef } from '@angular/core';
import { FormBuilder,Validators,FormGroup,AbstractControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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

  constructor(private fb: FormBuilder,private modalService: BsModalService) {}

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      mobNumber: ['', [Validators.required, mobileNumberValidator]],
      emailAdd: ['', [Validators.required, Validators.email]],
      // Other form controls...
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
}
