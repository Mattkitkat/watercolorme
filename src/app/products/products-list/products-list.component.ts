import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  lastClickedProduct: Product;
  closeResult = '';
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  productOnClick(product: Product, content){
    this.lastClickedProduct = product;
    this.open();
  }

  open() {
    const dialogRef = this.dialog.open(ProductDetailComponent);
    dialogRef.componentInstance.product = this.lastClickedProduct;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
