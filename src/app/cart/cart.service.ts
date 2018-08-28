import {Injectable} from '@angular/core';

import {CartItem} from './item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    localStorageCart: Array<CartItem> = [];

    constructor() {
    }

    getItems(): Array<CartItem> {
        return this.localStorageCart || [];
    }

    addItem(item: CartItem) {
        const duplicatedItem = this.getDuplicate(item.id);
        if (duplicatedItem) {
            duplicatedItem.quantity += 1;
        } else {
            this.localStorageCart.push(item);
        }
    }

    getDuplicate(id: number) {
        return this.localStorageCart.find(item => item.id === id);
    }

    getTotalPrice() {
        return this.localStorageCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}
