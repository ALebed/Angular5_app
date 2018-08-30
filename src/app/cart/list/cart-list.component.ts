import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import {CartService} from '../cart.service';

import {CartItem} from '../item.model';

interface ChangeQuantityObject {
    id: number;
    quantity: number;
}

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
    @Input() cart: Array<CartItem>;

    @Output() changeQuantity: EventEmitter<ChangeQuantityObject> = new EventEmitter<ChangeQuantityObject>();

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        // this.cart = this.cartService.getItems();
    }

    onChangeQuantity(id:number, quantity: number): void {
        this.changeQuantity.emit({id, quantity});
    }
}
