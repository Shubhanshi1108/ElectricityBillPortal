// complaints.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../Model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private billUrl = 'assets/bill.json'; // Adjust the path

  constructor(private http: HttpClient) {}

  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billUrl);
  }
}
