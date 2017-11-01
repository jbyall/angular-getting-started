export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// Use concrete class if we need to implement methods
export class Product implements IProduct {
    //Properties
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;

    //Constructor
    constructor() { }

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}
