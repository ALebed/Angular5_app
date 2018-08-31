import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import {CartService} from '../cart.service';

import {CartItem} from '../cart-item.model';
import {IChangeItem} from '../change-item.interface';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
    @Input() cart: Array<CartItem>;

    @Output() changeQuantity: EventEmitter<IChangeItem> = new EventEmitter<IChangeItem>();

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

    onChangeQuantity(id: number, quantity: number): void {
        this.changeQuantity.emit({ id, quantity });
    }
}
