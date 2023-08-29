import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css']
})
export class RegisterComplaintComponent implements OnInit {
  complainForm!: FormGroup;
  modalRef: BsModalRef | undefined;


  constructor(private fb: FormBuilder,private modalService: BsModalService) {}

  ngOnInit(): void {
    this.complainForm = this.fb.group({
      complainType: ['1', Validators.required],
      category: ['1', Validators.required],
      contactPerson: ['', Validators.required],
      landmark: ['', Validators.required],
      consNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      pblmDes: ['', Validators.required],
      mobileNum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      // Other form controls...
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
