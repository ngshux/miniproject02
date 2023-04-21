import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.css']
})
export class TrayComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService
    , private formBuilder: FormBuilder){}
}
