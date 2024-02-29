import { Component } from '@angular/core';
import { Category } from '../categories'; 
import { PRODUCTS, Product } from '../product'; 

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent2 {
  categories: Category[];
  selectedCategory: Category | null = null;

  constructor() {
    this.categories = this.getCategories();
  }

  getCategories(): Category[] {
    const uniqueCategories = [...new Set(PRODUCTS.map(product => product.category))];
    
    return uniqueCategories.map(categoryName => ({
      name: categoryName,
      products: PRODUCTS.filter(product => product.category === categoryName)
    }));
  }

  showProducts(category: Category): void {
    this.selectedCategory = category;
  }
  removeProduct(product: Product) {
    if (!this.selectedCategory) return; 

    const index = this.selectedCategory.products.findIndex(p => p === product);
    if (index !== -1) {
      this.selectedCategory.products.splice(index, 1);
    }
  }
}

