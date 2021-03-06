import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/products-list/product-card/product-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShippingDetailComponent } from './shipping/shipping-detail/shipping-detail.component';
import { BillingDetailComponent } from './shipping/billing-detail/billing-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    ProductCardComponent,
    NavigationComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ShippingComponent,
    ShippingDetailComponent,
    BillingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
