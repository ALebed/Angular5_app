import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

import {Product} from '../product.model';

import {CatalogService} from '../catalog.service';
import {CommunicatorService} from '../../core/services/communicator.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit, AfterContentInit {
    productList: Array<Product>;

    @ContentChild('catalogTitle')
    catalogTitle: ElementRef;

    constructor(private catalogService: CatalogService,
                private communicatorService: CommunicatorService) {
    }

    ngOnInit() {
        this.productList = this.catalogService.getProducts();
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
