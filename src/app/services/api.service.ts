import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getConversions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/conversions`, { headers: this.getAuthHeaders() });
  }

  convert(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/conversions`, data, { headers: this.getAuthHeaders() });
  }

  handleWebhook(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/webhook`, data, { headers: this.getAuthHeaders() });
  }

  getAuditLogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/audit-log`, { headers: this.getAuthHeaders() });
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
