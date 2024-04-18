import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Vacancy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/api';

  constructor(private http: HttpClient) {} 

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    const url = `${this.apiUrl}/companies/${companyId}/vacancies`; 
    return this.http.get<Vacancy[]>(url);
  }
}
