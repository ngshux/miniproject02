import { Component } from '@angular/core';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  addToTray() {
    window.alert('Placed pastry on tray!');
  }

  favourite() {
    window.alert('Favourited pastry! YumYUuyUMyumYUM')
  }

}
