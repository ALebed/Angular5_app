export enum Categories {
    Shoes = 'Shoes',
    Accessories = 'Accessories',
    Clothes = 'Clothes'
}

interface ProductInterface {
    id: number;
    name: string;
    price: number;
    category: Categories;
    quantity: number;
    description?: string;
}

export class Product implements ProductInterface {
    isAvailable: boolean;
    total: number;

    constructor(
        public id,
        public name,
        public price,
        public category,
        public quantity,
        public description?
    ) {
        this.id = id || null;
        this.description = description || null;
        this.isAvailable = quantity > 0;
        this.total = this.quantity;
    }
}
