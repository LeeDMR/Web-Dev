import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyService } from './services/company.service';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component'; // Исправлен путь
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CompaniesListComponent,
    CompanyVacanciesComponent, // Подтвердите правильность имени компонента
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Исправлено на массив
  providers: [CompanyService, VacancyService]
})
export class AppComponent {
  title = 'hh-front';
}
