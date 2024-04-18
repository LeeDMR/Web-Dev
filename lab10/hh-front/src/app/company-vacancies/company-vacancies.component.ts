
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CompanyVacanciesComponent implements OnChanges {
  @Input() companyId?: number;  
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['companyId'] && changes['companyId'].currentValue != null) {
      this.getVacancies(this.companyId!);
    }
  }

  private getVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(
      (data: Vacancy[]) => this.vacancies = data,
      error => console.error(error)
    );
  }
}
