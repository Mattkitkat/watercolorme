import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventsSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd ))
    .subscribe((event: NavigationEnd) => {
      var navigation = router.getCurrentNavigation();
      if(navigation.extras.state) {
        if(navigation.extras.state['notFound']){
          this.eventsSubject.next(true);
          return;
        }
      }
      
      this.eventsSubject.next(false);
    });
  }

}
