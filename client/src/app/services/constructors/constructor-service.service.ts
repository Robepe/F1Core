import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstructorService {
  private apiUrl = 'http://localhost:4201/api/constructor';
  private updateSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getConstructors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addConstructor(constructor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, constructor);
  }

  updateConstructor(constructorId: number, updatedConstructor: any): Observable<any> {
    const url = `${this.apiUrl}/${constructorId}`;
    return this.http.put<any>(url, updatedConstructor);
  }

  deleteConstructor(constructorId: number): Observable<any> {
    const url = `${this.apiUrl}/${constructorId}`;
    return this.http.delete<any>(url);
  }

  emitUpdateEvent(): void {
    this.updateSubject.next();
  }

  getUpdateEvent(): Observable<void> {
    return this.updateSubject.asObservable();
  }
}
