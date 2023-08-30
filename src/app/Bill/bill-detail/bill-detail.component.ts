import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bill } from 'src/app/Model/bill.model';
import { BillService } from 'src/app/Service/bill.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  billForm: FormGroup;
  billNum: number = 0;
  billDetails: Bill[] = [];

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private router: Router, private billService: BillService) {
    this.billForm = this.formBuilder.group({
      billNum: [''],
      billID: ['', [Validators.required]]
    });
  }
  ngOnInit() {

  }

  fetchBill() {
    console.log('Fetching bill details...');
    this.billNum = this.billForm.value.billNum;
    this.billService.getBills().subscribe({
      next: (data) => {
        console.log('Data fetched:', data);
        
        // Log individual bill properties to verify their structure
        data.forEach(bill => {
          console.log('Bill ID:', bill.billNum);
        });
    
        this.billDetails = data.filter(bill => bill.billNum === this.billNum);
        console.log('Filtered bill details:', this.billDetails);
      },
      error: (error) => {
        console.error('Error in fetching bill details:', error);
      }
    });
    
  }


  updateBill() {
    // Navigate to the update customer detail component with a parameter (example: customer ID)
    const billID = 123; // Example customer ID
    this.router.navigate(['/updateBill']);
    // Implement your update logic here
  }

  deleteBill(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
