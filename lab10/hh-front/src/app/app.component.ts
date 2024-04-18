import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyService } from './services/company.service';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component'; 
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CompaniesListComponent,
    CompanyVacanciesComponent, 
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [CompanyService, VacancyService]
})
export class AppComponent {
  title = 'hh-front';
  
}
