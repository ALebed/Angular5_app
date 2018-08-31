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

    getProduct(id: number): Product {
        return this.localStorageCatalog.find(product => product.id === id);
    }

    removeProduct(id: number, amount: number): void {
        this.localStorageCatalog = this.localStorageCatalog.map(product => {
            return (product.id === id) ? {
                ...product,
                quantity: product.total - amount,
                isAvailable: product.total - amount > 0,
            } : product; } );
    }

    changeProduct(data: {id: number, quantity: number}) {
        const productChanged = this.localStorageCatalog.find(item => item.id === data.id);
        productChanged.quantity = productChanged.total - data.quantity;
        productChanged.isAvailable = productChanged.quantity > 0;
    }
}
