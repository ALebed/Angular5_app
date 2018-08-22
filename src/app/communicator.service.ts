import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CartItem} from './cart/item.model';

@Injectable()
export class CommunicatorService {
    private catalogChannel = new Subject<CartItem>();

    public catalogChannel$ = this.catalogChannel.asObservable();

    publishCatalogData(data: CartItem) {
        this.catalogChannel.next(data);
    }
}
