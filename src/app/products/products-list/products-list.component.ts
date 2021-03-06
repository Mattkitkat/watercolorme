import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  eventsSubject: Subject<Product> = new Subject<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  productOnClick(product: Product) {
    this.eventsSubject.next(product);
  }
}
