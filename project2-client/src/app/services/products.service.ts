import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { Product } from '../models/products';

const BACKEND = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  onSearchResults = new Subject<Product[]>()
  onSearchQuery = new Subject<string>()

  constructor(private http: HttpClient) {}
  

  getIngredients(name: string): Promise<Product[]>{
    //this.onSearchQuery.next(name)
    //const params = new HttpParams().set("name", name)
    return firstValueFrom(
      this.http.get<Product[]>(`${BACKEND}/api/food/${name}`)
      ).then(results => {
      this.onSearchResults.next(results)
      return results;
    })
  }
}
