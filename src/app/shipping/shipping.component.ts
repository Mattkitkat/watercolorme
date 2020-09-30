import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  @Input() events: Observable<boolean>;
  private eventsSubscription: Subscription;
  activateComponent: boolean;
  shippingEventSubject: Subject<boolean> = new Subject<boolean>();
  billingEventSubject: Subject<boolean> = new Subject<boolean>();
  orderEventSubject: Subject<boolean> = new Subject<boolean>();
  private modalActiveState: string = "modal is-active";
  private modalInActiveState: string = "modal";
  modalClassName: string;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((activate) => {
      this.activateComponent = activate;
      this.showModal();
    });
    this.modalClassName = this.modalActiveState;
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  onShippingClick() {
    this.shippingEventSubject.next(true);
    this.billingEventSubject.next(false);
  }

  onBillingClick() {
    this.billingEventSubject.next(true);
    this.shippingEventSubject.next(false);
  }

  showModal() {
    this.modalClassName = this.modalActiveState;
  }

  hideModal() {
    this.modalClassName = this.modalInActiveState;
  }

}
