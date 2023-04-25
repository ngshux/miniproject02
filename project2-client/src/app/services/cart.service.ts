import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public static items: Product[] = [];

  constructor(private http: HttpClient) { }

  public static addToTray(product: Product){
    product.qty=1;
    this.items.push(product);
  }

  public static getItems(){
    return this.items;
  }

  public static clearTray(){
    this.items = [];
    return this.items;
  }
}
