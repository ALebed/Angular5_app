import {Injectable} from '@angular/core';

import {CartItem} from './cart-item.model';
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
        const {id, name, price, total, quantity} = product;

        this.localStorageCart =
            this.localStorageCart.find(item => item.id === id)
                ? this.getUpdatedCart(id, total - quantity)
                : [...this.localStorageCart, {id, name, price, total, quantity: (total - quantity)}];
    }

    updateItem(id, quantity) {
        this.localStorageCart = this.getUpdatedCart(id, quantity);
    }

    getUpdatedCart(id, quantity) {
        return this.localStorageCart.map(item => (item.id === id) ? {
            ...item,
            quantity,
        } : item);
    }

    getTotalPrice() {
        return this.localStorageCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}
