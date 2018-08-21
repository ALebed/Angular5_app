import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: Array<CartItem>;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cart = this.cartService.getItems();
    }
}
