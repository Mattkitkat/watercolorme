import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

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
