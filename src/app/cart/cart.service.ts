import {Injectable} from '@angular/core';

import {CartItem} from './item.model';
import {Product} from '../catalog/product.model';

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

    addItem(product: Product) {
        const {id, name, price, total} = product;
        const isDuplicated = this.localStorageCart.find(item => item.id === product.id);
        if(isDuplicated) {
            this.localStorageCart.map(item => {
                if (item.id === product.id) {
                    item.quantity += 1;
                }
            });
        } else {
            this.localStorageCart.push({id, name, price, total, quantity: 1})
        }
    }

    updateItem(id, quantity) {
        this.localStorageCart.map(item => {
            if(item.id === id) { item.quantity = quantity }
        });
    }

    getTotalPrice() {
        return this.localStorageCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}
