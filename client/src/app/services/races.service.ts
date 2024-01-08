// En tu servicio (race.service.ts)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private apiUrl = 'http://localhost:4201/api/races';

  constructor(private http: HttpClient) {}

  getProximaCarrera(round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${round}`);
  }
}