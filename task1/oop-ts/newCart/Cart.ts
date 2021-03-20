import { v4 as uuid, validate } from "uuid";
import { ICartItem } from "./CartItem";
import { IProduct } from "./Product";
import { Validator } from "./Validator";

export interface ICart {
  id: string;
  productsList: Array<ICartItem>;
  discount: number;
  discountCode?: string;
}

export class Cart implements ICart {
  id = uuid();
  productsList: Array<ICartItem>;
  discount: number;
  discountCode?: string;

  constructor(
    productsList: Array<ICartItem>,
    discount: number,
    discountCode?: string
  ) {
    this.productsList = productsList;
    if (!Validator.isValidValue(discount))
      throw new Error("Discount is not valid");
    this.discount = discount;
    if (discountCode) {
      if (!Validator.isValidDiscountCode(discountCode)) {
        throw new Error("Discount code is not valid");
      }
      this.discountCode = discountCode;
    }
  }

  private _doesElementExistInArray(id: string) {
    if (!this.productsList.some((item) => item.product.id === id)) return false;

    return false;
  }

  private _sumItemsPrice() {
    const cartPrice = this.productsList.reduce((acc, av) => {
      acc += av.product.price * av.quantity;
      return acc;
    }, 0);
    return cartPrice;
  }

  removeItem(id: string) {
    if (!this._doesElementExistInArray(id))
      throw new Error("Product doesn't exist in cart");

    this.productsList.filter((item) => item.product.id !== id);
  }

  addItem(item: ICartItem) {
    if (!this._doesElementExistInArray(item.product.id)) {
      this.productsList.push(item);
    }
  }

  changeQuantity(id: string, quantity: number) {
    if (!Validator.isValidAmount(quantity)) throw new Error("Invalid quantity");
    if (!this._doesElementExistInArray(id))
      throw new Error("Product doesn't exist in cart");

    this.productsList.forEach((el) => {
      if (el.product.id === id) {
        el.quantity = quantity;
      }
    });
  }

  getCartPrice() {
    if (this.discount > 0) {
      const basicPrice = this._sumItemsPrice();
      const priceWithDiscount = parseInt(
        ((basicPrice / 100) * this.discount).toFixed(2)
      );
      return priceWithDiscount;
    } else {
      return this._sumItemsPrice();
    }
  }
}
