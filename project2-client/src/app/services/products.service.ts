import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  

  getIngredients(): Promise<string[]>{
    return firstValueFrom(
      this.http.get<string[]>('/api')
    )
  }

  
}
