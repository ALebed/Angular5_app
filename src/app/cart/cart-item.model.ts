interface CartItemInterface {
    id: number;
    name: string;
    price: number;
    total: number;
    quantity?: number;
}

export class CartItem implements CartItemInterface {
    constructor(
        public id,
        public name,
        public price,
        public total,
        public quantity
    ) {
        this.id = id || null;
        this.quantity = quantity;
    }
}
