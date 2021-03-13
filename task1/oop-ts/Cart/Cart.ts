import { v4 as uuid } from "uuid";
import { ICartItem } from "./CartItem";
import { isValidName } from "../../Utils/Validation";
import {
  sumOfProductsPrice,
  priceAfterDiscount,
  removeItem,
  doesProductExist,
  changeQuantityOnList,
} from "./helpers";

export interface ICart {
  products: Array<productType>;
  discount: number;
  discountCode: string;
  id: string;
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
    //validate product
    this.products.push({ product, quantity });
  }

  changeQuantity(name: string, quantity: number) {
    doesProductExist(this.products, name);
    const changedProductList = changeQuantityOnList(
      this.products,
      quantity,
      name
    );
    this.products = changedProductList;
  }

  removeItem(name: string) {
    isValidName(name);
    doesProductExist(this.products, name);
    const newProductsList = removeItem(this.products, name);
    this.products = newProductsList;
  }

  getPrice() {
    const priceOfAllProducts = sumOfProductsPrice(this.products);
    const priceWithDiscount = priceAfterDiscount(
      this.discount,
      priceOfAllProducts
    );
    return priceWithDiscount;
  }
}
