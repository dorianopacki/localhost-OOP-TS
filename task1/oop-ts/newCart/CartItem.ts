import { IProduct } from "./Product";

export interface ICartItem {
  quantity: number;
  product: IProduct;
}

export class CartItem implements ICartItem {
  quantity: number;
  product: IProduct;

  constructor(quantity: number, product: IProduct) {
    this.quantity = quantity;
    this.product = product;
  }
}
