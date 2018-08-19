import { Injectable } from '@angular/core';

import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getItems(): Array<CartItem> {
    return [
        new CartItem(1, 'Bleyer Shoes', 57),
        new CartItem(4, 'Belt', 20)
    ];
  }
}
