import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Nutrients, Product, products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;
  
  sub$!: Subscription
  constructor(private route: ActivatedRoute,
              private prodSvc: ProductsService){
  }

  addToTray(product: Product){
    CartService.addToTray(product);
    window.alert('Added to cart!');  }

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));
      //this.product = products.find(product => product.id === productIdFromRoute);
      this.sub$ = this.prodSvc.onSearchIngredient.subscribe(
        (ing) => {
          this.product = ing
        }
      )
      this.prodSvc.getIngredientByID(productIdFromRoute);
  }
}
