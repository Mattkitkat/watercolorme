import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundGuard } from './guards/not-found.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'shipping', component: ShippingComponent},
  { path: '404', component: NotFoundComponent, canActivate: [NotFoundGuard]},
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }