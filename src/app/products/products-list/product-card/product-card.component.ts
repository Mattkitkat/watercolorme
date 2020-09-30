import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() showProductDetail = new EventEmitter<Product>();

  productOnClick(product: Product) {
    this.showProductDetail.next(product);
  }
}
