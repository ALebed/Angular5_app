import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../item.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {
    @Input() item: CartItem;

    @Output() changeQuantity: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    onBlur(quantity: number) {
        this.changeQuantity.emit(quantity);
    }
}
