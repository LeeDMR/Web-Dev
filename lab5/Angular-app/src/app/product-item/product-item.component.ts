
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product'; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter<Product>();
  likes: number = 0;

  constructor() {}

  likeProduct() {
    this.likes++;
  }
  remove() {
    this.removeProduct.emit(this.product);
  }
}
