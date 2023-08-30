import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/Model/complaint.model';
import { ComplaintsService } from 'src/app/Service/compliants.service';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import FormGroup

@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.component.html',
  styleUrls: ['./complain-status.component.css']
})
export class ComplainStatusComponent implements OnInit {
  complainDetails: Complaint[] = [];
  complainNum: number = 0;
  complainForm: FormGroup; // Define form group


  constructor(private complaintsService: ComplaintsService,
    private formBuilder: FormBuilder // Inject FormBuilder
    ) {
      this.complainForm = this.formBuilder.group({
        complainNum: [''] });
    }
    ngOnInit() {
      // This method will be called when the component is initialized.
      // You can perform any initialization here.
    }
    getComplainStatus() {
      this.complainNum = this.complainForm.value.complainNum; // Get complaintNum from form
  
      console.log('Getting complain status...');
      this.complaintsService.getComplaints().subscribe({
        next: (data) => {
          this.complainDetails = data.filter(complain => complain.complaintNumber === this.complainNum);
        },
        error: (error) => {
          console.error('Error fetching complaints:', error);
        }
      });
    }      
}
