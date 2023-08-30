import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.adminLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  adminLogin() {
    // Implement your admin login logic here
    
    // After successful login, navigate to the admin dashboard
    this.router.navigate(['/adminDashboard']);
  }
}
