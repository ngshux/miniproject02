import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public static product: Product | undefined;

  constructor() {
  }

  public static getScope(){
      return this.product;
  }

  public static setScope(product: Product){
      this.product = product;
  }
}
