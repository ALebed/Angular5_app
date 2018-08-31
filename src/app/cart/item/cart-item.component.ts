import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../item.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {
    @Input() item: CartItem;

    @Output() changeQuantity: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    onBlur(quantity: number) {
        this.changeQuantity.emit(quantity);
    }
}
