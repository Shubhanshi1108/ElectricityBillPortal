// complaints.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from '../Model/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private complaintsUrl = 'assets/complaints.json'; // Adjust the path

  constructor(private http: HttpClient) {}

  getComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.complaintsUrl);
  }
}
