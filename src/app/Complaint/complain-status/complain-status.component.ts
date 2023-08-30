import { Component } from '@angular/core';
import { Complaint } from 'src/app/Model/complaint.model';
import { ComplaintsService } from 'src/app/Service/compliants.service';
@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.component.html',
  styleUrls: ['./complain-status.component.css']
})
export class ComplainStatusComponent {
  complainDetails: Complaint[] = [];
  complainNum: number = 0;

  constructor(private complaintsService: ComplaintsService) {}

  getComplainStatus() {
    console.log('Getting complain status...');
    this.complaintsService.getComplaints().subscribe(data => {
      console.log('Received data:', data);
      this.complainDetails = data.filter(complain => complain.complaintNumber === this.complainNum);
      console.log('Filtered complaints:', this.complainDetails);
    });
  }
}
