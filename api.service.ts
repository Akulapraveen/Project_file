// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://your-api-url'; // replace with your actual API URL

  constructor(private http: HttpClient) {}

  getLinks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/links`);
  }

  createLink(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/links`, data);
  }

  getLinkDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/links/${id}`);
  }

  getLinkAnalytics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics`);
  }
}
