// src/app/components/companies-list/companies-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../models';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  standalone: true,
  imports: [CommonModule]  // Correct import of CommonModule
})
export class CompaniesListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onSelectCompany(id: number): void {
    this.selectedCompanyId = id;
  }
}
