import {Component, Input} from '@angular/core';
import {CartItem} from '../item.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './item.component.html'
})

export class ItemComponent {
    @Input() item: CartItem;

    constructor() {}
}
