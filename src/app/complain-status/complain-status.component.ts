import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.component.html',
  styleUrls: ['./complain-status.component.css']
})
export class ComplainStatusComponent {
  complainForm: FormGroup;
  complainDetails: any[] = [];

  constructor(private fb: FormBuilder) {
    this.complainForm = this.fb.group({
      complainNum: ['', Validators.required]
    });
  }

  getComplainStatus() {
    // Replace this with your logic to fetch complaint details based on the complaint number
    // For this example, I'm just simulating data
    const mockComplaintData = {
      complaintNumber: 123,
      complaintType: 'Bill Related',
      category: 'Bill Related',
      contactPerson: 'John Doe',
      landmark: 'Near ABC Street',
      consNumber: '1234567890123',
      pblmDes: 'Frequent power cuts',
      mobileNum: '1234567890',
      address: '123 Main St, City',
      status:'Not Resolved'

    };

    // Add the fetched complaint details to the array
    this.complainDetails.push(mockComplaintData);
  }
}
