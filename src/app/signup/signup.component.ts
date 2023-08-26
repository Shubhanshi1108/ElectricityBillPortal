import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

function mobileNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = /^[0-9]{10}$/; // Match exactly 10 digits
  if (!pattern.test(control.value)) {
    return { 'invalidMobileNumber': true };
  }
  return null;
}

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  return null;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  modalRef: BsModalRef | undefined;


  constructor(private fb: FormBuilder,private modalService: BsModalService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      title: ['1'],
      customerName: ['', [Validators.required, Validators.maxLength(50)]],
      mobNumber: ['', [Validators.required, mobileNumberValidator]],
      userID: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.maxLength(30)]], // Add max length validator
      confirmPassword: ['', [Validators.required, Validators.maxLength(30)]],
      emailAdd: ['', [Validators.required, Validators.email]],
      // Other form controls...
    },{ validators: passwordMatchValidator });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
}
