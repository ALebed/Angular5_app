import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {CartService} from './cart.service';
import {CommunicatorService} from '../core/services/communicator.service';

import {CartItem} from './cart-item.model';
import {IChangeItem} from './change-item.interface';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    cart: Array<CartItem>;

    constructor(private cartService: CartService,
                private communicatorService: CommunicatorService) {
    }

    ngOnInit() {
        this.cart = this.cartService.getItems();
        this.sub = this.communicatorService.catalogProductAddChannel$.subscribe(data => {
            this.cartService.addItem(data);
            this.cart = this.cartService.getItems();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onChangeQuantity({ id, quantity }: IChangeItem): void {
        this.cartService.updateItem(id, quantity);
        this.communicatorService.publishCartItemChanges(id, quantity);
    }
}
