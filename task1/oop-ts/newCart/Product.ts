import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";

export interface IProduct {
  id: string;
  price: number;
  setProductName: (name: string) => void;
  setProductPrice: (price: number) => void;
  setProductDiscount: (discount: number) => void;
  addProductCategory: (category: string) => void;
}

export class Product implements IProduct {
  readonly id = uuid();

  public name: string;
  private _category: Array<string>;
  private _discount: number;

  public price: number;

  constructor(
    name: string,
    category: Array<string>,
    price: number,
    discount: number
  ) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.name = name;
    if (!Validator.isValidCategory(category))
      throw new Error("Category is not valid");
    this._category = category;
    if (!Validator.isValidValue(price)) throw new Error("Price is not valid");
    this.price = price;
    if (!Validator.isValidValue(discount))
      throw new Error("Value is not valid");
    this._discount = discount;
  }

  setProductName(name: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.name = name;
  }

  setProductPrice(price: number) {
    if (!Validator.isValidValue(price)) throw new Error("Price is not valid");
    this.price = price;
  }

  setProductDiscount(discount: number) {
    if (!Validator.isValidValue(discount))
      throw new Error("Discount is not valid");
    this._discount = discount;
  }

  addProductCategory(category: string) {
    if (!Validator.isValidName(category))
      throw new Error("Category name is not valid");
    this._category.push(category);
  }
}
