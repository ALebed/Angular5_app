import {AfterContentInit, Component, ContentChild, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Product} from '../product.model';

import {CatalogService} from '../catalog.service';
import {CommunicatorService} from '../../core/services/communicator.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit, AfterContentInit, OnDestroy {
    private sub: Subscription;
    productList: Array<Product>;

    @ContentChild('catalogTitle')
    catalogTitle: ElementRef;

    constructor(private catalogService: CatalogService,
                private communicatorService: CommunicatorService) {
    }

    ngOnInit() {
        this.productList = this.catalogService.getProducts();

        this.sub = this.communicatorService.catalogChannel$.subscribe();
        this.sub = this.communicatorService.cartItemChangeChannel$.subscribe(data => this.catalogService.changeProduct(data));
    }

    ngAfterContentInit() {
        this.catalogTitle.nativeElement.innerText = 'Product Catalog';
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBuy(product: Product): void {
        const configuredProduct = this.catalogService.getConfiguredProduct(product.id);

        this.communicatorService.publishCatalogData(configuredProduct);
    }
}
