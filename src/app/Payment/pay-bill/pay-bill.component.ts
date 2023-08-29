import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {
  showTable = true;
  consumerDetails: any[] = []; // Replace 'any' with an appropriate interface or class
  totalPayableAmount: number = 0; // Initialize totalPayableAmount property

  constructor() { }

  ngOnInit(): void {
    // Fetch and populate consumerDetails with data
    // For example:
    this.fetchConsumerDetails();
  }

  fetchConsumerDetails() {
    // Simulated data
    this.consumerDetails = [
      { consumerNumber: '1234567890123', selected: false, dueAmount: 100, payable: 50 },
      { consumerNumber: '9876543210987', selected: false, dueAmount: 50, payable: 25 },
      // ... Add more consumer data here ...
    ];
  }

  toggleConsumerSelection(consumer: any) {
    consumer.selected = !consumer.selected;
    this.calculateTotalPayable(); // Update totalPayableAmount when selection changes
  }

  calculateTotalPayable() {
    this.totalPayableAmount = this.consumerDetails
      .filter(consumer => consumer.selected)
      .reduce((total, consumer) => total + consumer.payable, 0);
  }

  onPayBillClick() {
    // Implement the logic to process the payment for selected consumers
    const selectedConsumers = this.consumerDetails.filter(consumer => consumer.selected);
    if (selectedConsumers.length > 0) {
      // Implement payment processing logic here
      console.log('Processing payment for selected consumers:', selectedConsumers);
      // You can open a payment gateway or perform other payment-related actions
    } else {
      console.log('No consumers selected for payment.');
    }
  }
}
