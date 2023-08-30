import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  
    loginForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder,private router:Router) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  
    ngOnInit(): void {
    }
    login() {
      // Implement your login logic here
      // After successful login, navigate to the user dashboard
    this.router.navigate(['/userDashboard']);
    }
}
