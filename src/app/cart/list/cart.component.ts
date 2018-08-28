import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItem} from '../item.model';
import {CartService} from '../cart.service';
import {Subscription} from 'rxjs';
import {CommunicatorService} from '../../core/services/communicator.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    cart: Array<CartItem>;

    constructor(private cartService: CartService,
                private communicatorService: CommunicatorService) {
    }

    ngOnInit() {
        this.cart = this.cartService.getItems();
        this.sub = this.communicatorService.catalogChannel$.subscribe(data => this.cartService.addItem(data));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onChangeQuantity(quantity: number, id: number) {
        this.communicatorService.publishCartItemChanges(id, quantity);
    }
}
