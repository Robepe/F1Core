import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private apiUrl = 'http://localhost:4201/api/results';

  constructor(private http: HttpClient) {}

  getResults(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addResult(result: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, result);
  }

  updateResult(resultId: number, updatedDriver: any): Observable<any> {
    const url = `${this.apiUrl}/${resultId}`;
    return this.http.put<any>(url, updatedDriver);
  }

  deleteResult(resultId: number): Observable<any> {
    const url = `${this.apiUrl}/${resultId}`;
    return this.http.delete<any>(url);
  }
}