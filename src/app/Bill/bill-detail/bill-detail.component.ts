import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent {
  modalRef: BsModalRef | undefined;
  customerID: number | undefined; // To store the entered bill ID
  customerDetails: any[] = []; // To store fetched customer details

  constructor(private modalService: BsModalService) {}

  getBillDetail() {
    // Implement your logic here to fetch all the bills of that particular customer
    // For example:
    
  }

  deleteBill(customer: any) {
    // Implement your logic here to delete the customer
    // Show the modal
    this.modalRef = this.modalService.show(customer, { class: 'modal-md' });
  }

  updateBill() {
    // Implement your logic for updating the customer
  }
}
