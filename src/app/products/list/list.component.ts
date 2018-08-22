import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

import {Product} from '../product.model';

import {ListService} from '../products.service';
import {CommunicatorService} from '../../communicator.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, AfterContentInit {
    productList: Array<Product>;

    @ContentChild('catalogTitle')
    catalogTitle: ElementRef;

    constructor(private listService: ListService,
                private communicatorService: CommunicatorService) {
    }

    ngOnInit() {
        this.productList = this.listService.getProducts();
    }

    ngAfterContentInit() {
        this.catalogTitle.nativeElement.innerText = 'Product Catalog';
    }

    onBuy(product: Product): void {
        const boughtProduct = this.productList.find((item) => item.id === product.id);
        boughtProduct.quantity -= 1;

        // TODO: ask, how to avoid additional check here, and rerender 'isAvailable' automatically
        boughtProduct.isAvailable = boughtProduct.quantity > 0;

        const {id, name, price} = product;
        this.communicatorService.publishCatalogData({id, name, price});
    }
}
