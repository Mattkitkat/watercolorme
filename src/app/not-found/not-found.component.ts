import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  @Input() events: Observable<boolean>;
  private eventsSubscription: Subscription;
  private modalActiveState: string = "modal is-active";
  private modalInActiveState: string = "modal";
  modalClassName: string;

  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((active) => this.showModal(active));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  showModal(active: boolean) {
    if (active) {
      this.modalClassName = this.modalActiveState;
    } else {
      this.modalClassName = this.modalInActiveState;
    }
  }

}
