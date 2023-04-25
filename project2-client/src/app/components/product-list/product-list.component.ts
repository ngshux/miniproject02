import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Product, products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  products: Product[] = [];
  sub$!: Subscription

  constructor(private prodSvc: ProductsService){}

  ngOnInit(): void {
    //this.products=products;
      this.sub$ = this.prodSvc.onSearchResults.subscribe(
        (products) => {
          this.products = products
        }
      )
      this.prodSvc.getIngredients("bread");
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe()
  }

  addToTray(product: Product) {
    window.alert('Added to cart!');
    CartService.addToTray(product);
  }


}
