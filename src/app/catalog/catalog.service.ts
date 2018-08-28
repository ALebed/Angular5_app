import {Injectable} from '@angular/core';

import {Product, Categories} from './product.model';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    localStorageCatalog: Array<Product> = [
        new Product(1, 'Bleyer shoes', 57, Categories.Shoes, 10, 'Female black and white'),
        new Product(2, 'Bleyer shoes', 75, Categories.Shoes, 0, 'Male brown'),
        new Product(3, 'Dress', 20, Categories.Clothes, 5),
        new Product(4, 'Belt', 20, Categories.Accessories, 15, ''),
    ];

    constructor() {
    }

    getProducts(): Array<Product> {
        return this.localStorageCatalog || [];
    }

    getConfiguredProduct(itemId: number) {
        const boughtProduct = this.localStorageCatalog.find((item) => item.id === itemId);

        boughtProduct.quantity -= 1;
        boughtProduct.isAvailable = boughtProduct.quantity > 0;

        const {id, name, price, total} = boughtProduct;
        return {id, name, price, quantity: 1, total};
    }

    changeProduct(data: {id: number, quantity: number}) {
        const productChanged = this.localStorageCatalog.find(item => item.id === data.id);
        productChanged.quantity = productChanged.total - data.quantity;
        productChanged.isAvailable = productChanged.quantity > 0;
    }
}
