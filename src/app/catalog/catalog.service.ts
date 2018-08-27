import { Injectable } from '@angular/core';

import { Product, Categories } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
        new Product(1, 'Bleyer shoes', 57, Categories.Shoes, 10, 'Female black and white'),
        new Product(2, 'Bleyer shoes', 75, Categories.Shoes, 0, 'Male brown'),
        new Product(3, 'Dress', 20, Categories.Clothes, 5),
        new Product(4, 'Belt', 20, Categories.Accessories, 15, ''),
    ];
  }
}
