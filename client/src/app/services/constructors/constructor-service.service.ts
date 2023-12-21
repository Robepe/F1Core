import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl = 'http://localhost:4201/api/constructors';

  constructor(private http: HttpClient) {}

  getConstructors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addConstructor(constructor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, constructor);
  }

  updateConstructor(constructorId: number, updatedDriver: any): Observable<any> {
    const url = `${this.apiUrl}/${constructorId}`;
    return this.http.put<any>(url, updatedDriver);
  }

  deleteConstructor(constructorId: number): Observable<any> {
    const url = `${this.apiUrl}/${constructorId}`;
    return this.http.delete<any>(url);
  }
}
