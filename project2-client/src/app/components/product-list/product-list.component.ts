import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, products } from 'src/app/models/products';
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

  addToTray() {
    window.alert('Added to cart!');
  }

  favourite() {
    window.alert('Favourited! YumYUuyUMyumYUM')
  }

}
