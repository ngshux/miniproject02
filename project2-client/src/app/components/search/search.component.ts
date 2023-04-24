import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup

  constructor(private fb: FormBuilder, private prodSvc: ProductsService) { }

  ngOnInit(): void {
    this.searchForm = this.createForm()
  }

  doSearch() {
    const ing = this.searchForm.get('name')?.value
    console.info('>>>> name: ', ing)
    this.prodSvc.getIngredients(ing)
      .then(ingredients => {
        this.searchForm.reset()
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [ Validators.required ])
    })
  }
}
