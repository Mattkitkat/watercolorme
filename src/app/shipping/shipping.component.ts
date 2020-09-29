import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  shippingActive: boolean = true;
  billingActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShippingClick() {
    if (this.shippingActive) {
      this.shippingActive = false;
    } else {
      this.shippingActive = true;
      this.billingActive = false;
    }
  }

  onBillingClick() {
    if (this.billingActive) {
      this.billingActive = false;
    } else {
      this.billingActive = true;
      this.shippingActive = false;
    }
  }

}
