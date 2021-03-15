import { v4 as uuid } from "uuid";
import { ICartItem } from "./CartItem";
import {
  isValidName,
  isValidNumber,
  isArrayNotEmpty,
} from "../../Utils/Validation";
import {
  sumOfProductsPrice,
  priceAfterDiscount,
  removeItem,
  doesProductExist,
  changeQuantityOnList,
  increaseQuantity,
} from "./helpers";

export interface ICart {
  products: Array<productType>;
  discount: number;
  discountCode: string;
  id: string;
  addProduct(product: ICartItem, quantity: number): void;
  changeQuantity(name: string, value: number): void;
  removeItem(name: string): void;
  getPrice(name: string): number;
}

export type productType = { product: ICartItem; quantity: number };

export class Cart implements ICart {
  constructor(
    public products: Array<productType>,
    public discount: number,
    public discountCode: string,
    readonly id = uuid()
  ) {}

  addProduct(product: ICartItem, quantity: number) {
    isValidNumber(quantity);
    if (!doesProductExist(this.products, product.name)) {
      this.products.push({ quantity, product });
    } else {
      const productsWithIncreasedQuantity = increaseQuantity(
        product.name,
        this.products,
        quantity
      );
      this.products = productsWithIncreasedQuantity;
    }
  }

  changeQuantity(name: string, quantity: number) {
    isValidNumber(quantity);
    if (!doesProductExist(this.products, name))
      throw new Error("There is no such a product on list");

    const changedProductList = changeQuantityOnList(
      this.products,
      quantity,
      name
    );
    this.products = changedProductList;
  }

  removeItem(name: string) {
    isValidName(name);
    if (!doesProductExist(this.products, name))
      throw new Error("There is no such a product on list");

    const newProductsList = removeItem(this.products, name);
    this.products = newProductsList;
  }

  getPrice() {
    if (!isArrayNotEmpty(this.products)) throw new Error("Cart is empty");

    const priceOfAllProducts = sumOfProductsPrice(this.products);
    const priceWithDiscount = priceAfterDiscount(
      this.discount,
      priceOfAllProducts
    );
    return priceWithDiscount;
  }
}
