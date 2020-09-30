import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit, OnDestroy {
  @Input() events: Observable<boolean>;
  private eventsSubscription: Subscription;
  activateComponent: boolean = true;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((activate) => this.activateComponent = activate);
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  constructor() { }

}
