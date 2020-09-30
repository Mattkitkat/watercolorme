import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() events: Observable<Product>;
  private eventsSubscription: Subscription;
  private modalActiveState: string = "modal is-active";
  private modalInActiveState: string = "modal";
  modalClassName: string;
  product: Product;

  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((product) => this.showModal(product));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  showModal(product: Product) {
    this.product = product;
    this.modalClassName = this.modalActiveState;
  }

  hideModal() {
    this.product = null;
    this.modalClassName = this.modalInActiveState;
  }

}