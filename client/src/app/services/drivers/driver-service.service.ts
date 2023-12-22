import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl = 'http://localhost:4201/api/drivers';
  private updateSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addDriver(driver: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, driver);
  }

  updateDriver(driverId: number, updatedDriver: any): Observable<any> {
    const url = `${this.apiUrl}/${driverId}`;
    return this.http.put<any>(url, updatedDriver);
  }

  deleteDriver(driverId: number): Observable<any> {
    const url = `${this.apiUrl}/${driverId}`;
    return this.http.delete<any>(url);
  }

  emitUpdateEvent(): void {
    this.updateSubject.next();
  }

  getUpdateEvent(): Observable<void> {
    return this.updateSubject.asObservable();
  }
}


