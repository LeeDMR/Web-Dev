import { Component } from '@angular/core';

import { PRODUCTS } from '../product'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  PRODUCTS = [...PRODUCTS];
}
