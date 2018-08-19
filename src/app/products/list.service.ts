import { Injectable } from '@angular/core';

import { Product, Categories } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
        new Product(1, 'Bleyer shoes', 'Female black and white', 57, Categories.Shoes, true),
        new Product(2, 'Dress', 'Female blue', 20, Categories.Clothes),
        new Product(3, 'Bleyer shoes', 'Male brown', 75, Categories.Shoes, false),
        new Product(4, 'Belt', 'Male brown', 20, Categories.Accessories, true)
    ];
  }
}
