import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Nutrients, Product, products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;
  
  sub$!: Subscription
  constructor(private route: ActivatedRoute, private cartService: CartService,
              private prodSvc: ProductsService){
    //this.product.nutrition = this.product.nutrition.slice();
  }

  addToTray(product: Product){
    this.cartService.addToTray(product);
    window.alert('Placed on Tray!');  }

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
