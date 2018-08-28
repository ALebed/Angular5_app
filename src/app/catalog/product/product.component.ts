import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    @Input() product: Product;

    @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

    @ViewChild('quantutyInput')
    quantity: ElementRef;

    expanded: boolean;

    constructor() {}

    ngOnInit() {
        this.expanded = false;
    }

    buy(): void {
        this.buyProduct.emit(this.product);
    }

    toggleDescription() {
        this.expanded = !this.expanded;
    }
}
