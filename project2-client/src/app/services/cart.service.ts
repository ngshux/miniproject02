import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToTray(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearTray(){
    this.items = [];
    return this.items;
  }
}
