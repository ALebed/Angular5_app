interface CartItemInterface {
    id: number;
    name: string;
    price: number;
}

export class CartItem implements CartItemInterface {
    constructor(
        public id,
        public name,
        public price
    ) {
        this.id = id || null;
    }
}
