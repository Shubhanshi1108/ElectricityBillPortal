import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {
  modalRef: BsModalRef | undefined;
  addBillForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.addBillForm = this.formBuilder.group({
      customerId: ['', [Validators.required, this.maxDigitsValidator(13)]],
      dueAmount: ['', [Validators.required, Validators.min(0)]],
      payAmount: ['', [Validators.required, Validators.min(0)]]
    },{
      validators: this.payableAmountValidator 
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef?.hide();
  }
  maxDigitsValidator(maxDigits: number) {
    return (control: AbstractControl) => {
      if (control.value && control.value.toString().length > maxDigits) {
        return { maxLength: true };
      }
      return null;
    };
  }
  payableAmountValidator(formGroup: FormGroup) {
    const dueAmount = formGroup.get('dueAmount')?.value;
    const payAmount = formGroup.get('payAmount')?.value;
    
    if (payAmount > dueAmount) {
      formGroup.get('payAmount')?.setErrors({ greaterThanDue: true });
    } else {
      formGroup.get('payAmount')?.setErrors(null);
    }
  }

  get customerId() {
    return this.addBillForm.get('customerId');
  }

  get dueAmount() {
    return this.addBillForm.get('dueAmount');
  }

  get payAmount() {
    return this.addBillForm.get('payAmount');
  }
}
