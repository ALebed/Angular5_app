import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    @Input() product: Product;

    @Output() buyProduct: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    buy(id: number): void {
        console.log(`click handler inside product component`);
        this.buyProduct.emit(id);
    }
}
