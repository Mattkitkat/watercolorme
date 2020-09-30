import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {
  constructor(private router: Router) {

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigate(['/products'], { state: { 'notFound': true } });
    return false;
  }
}
