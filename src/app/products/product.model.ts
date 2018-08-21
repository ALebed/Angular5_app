export enum Categories {
    Shoes = 'Shoes',
    Accessories = 'Accessories',
    Clothes = 'Clothes'
}

interface ProductInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Categories;
    isAvailable?: boolean;
}

export class Product implements ProductInterface {
    constructor(
        public id,
        public name,
        public description,
        public price,
        public category,
        public isAvailable?
    ) {
        this.id = id || null;
        this.isAvailable = isAvailable || false;
    }
}
