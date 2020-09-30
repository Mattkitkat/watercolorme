import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ShippingComponent } from '../shipping/shipping.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  eventSubject: Subject<boolean> = new Subject<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  openShipping() {
    this.eventSubject.next(true);
  }
}
