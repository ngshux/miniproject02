import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.css']
})
export class TrayComponent {

  items = CartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService
    , private formBuilder: FormBuilder){}

}
