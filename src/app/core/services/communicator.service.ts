import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {CartItem} from '../../cart/item.model';

interface ItemChangeObj {
    id: number;
    quantity: number;
}

@Injectable()
export class CommunicatorService {
    private catalogChannel = new Subject<CartItem>();
    private cartItemChangeChannel = new Subject<ItemChangeObj>();

    public catalogChannel$ = this.catalogChannel.asObservable();
    public cartItemChangeChannel$ = this.cartItemChangeChannel.asObservable();

    publishCatalogData(data: CartItem) {
        this.catalogChannel.next(data);
    }

    publishCartItemChanges(id: number, quantity: number) {
        this.cartItemChangeChannel.next({id, quantity});
    }
}
