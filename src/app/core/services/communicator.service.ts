import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Product} from '../../catalog/product.model';
import {IChangeItem} from '../../cart/change-item.interface';

@Injectable()
export class CommunicatorService {
    private catalogProductAddChannel = new Subject<Product>();
    private cartItemChangeChannel = new Subject<IChangeItem>();

    public catalogProductAddChannel$ = this.catalogProductAddChannel.asObservable();
    public cartItemChangeChannel$ = this.cartItemChangeChannel.asObservable();

    publishCatalogData(data: Product) {
        this.catalogProductAddChannel.next(data);
    }

    publishCartItemChanges(id: number, quantity: number) {
        this.cartItemChangeChannel.next({id, quantity});
    }
}
