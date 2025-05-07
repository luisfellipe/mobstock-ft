import { IProduct } from "./product.interface";

export class Product implements IProduct{
    id: string;
    name: string;
    price: number;
    desc: string;
    amount: number;

    constructor(
        id: string,
        name: string,
        price: number,
        desc: string, 
        amount: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.amount = amount;
    }
}
