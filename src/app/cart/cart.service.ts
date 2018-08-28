import {Injectable} from '@angular/core';

import {CartItem} from './item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {
    }

    getItems(): Array<CartItem> {
        return [];
    }
}
