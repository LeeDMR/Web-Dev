// src/app/components/company-vacancies/company-vacancies.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CompanyVacanciesComponent implements OnChanges {
  @Input() companyId?: number;  // Input property is now optional
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.companyId) {  // Check for existence since it's now optional
      this.vacancyService.getVacanciesByCompany(this.companyId).subscribe(vacancies => {
        this.vacancies = vacancies;
      });
    }
  }
}
