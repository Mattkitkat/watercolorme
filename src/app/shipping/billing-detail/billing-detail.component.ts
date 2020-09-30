import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-detail',
  templateUrl: './billing-detail.component.html',
  styleUrls: ['./billing-detail.component.css']
})
export class BillingDetailComponent implements OnInit {
  @Input() events: Observable<boolean>;
  private eventsSubscription: Subscription;
  activateComponent: boolean;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((activate) => this.activateComponent = activate);
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
