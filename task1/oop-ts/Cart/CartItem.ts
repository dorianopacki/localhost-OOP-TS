import { v4 as uuid } from "uuid";
import {
  isValidNumber,
  isValidDiscount,
  isValidCategory,
  isValidName,
} from "../../Utils/Validation";
import { priceAfterDiscount } from "./helpers";

export interface ICartItem {
  name: string;
  category: Array<String>;
  price: number;
  discount: number;
  id: string;
  setPrice(value: number): void;
  setDiscount(value: number): void;
  addCategory(name: string): void;
  setName(name: string): void;
}

export class CartItem implements ICartItem {
  constructor(
    public name: string,
    public category: Array<String>,
    public price: number,
    public discount: number,
    readonly id = uuid()
  ) {}

  setPrice(value: number) {
    isValidNumber(value);
    this.price = value;
  }

  setDiscount(value: number) {
    isValidDiscount(value);
    this.discount = value;
    const newPrice = priceAfterDiscount(value, this.price);
    this.setPrice(newPrice);
  }

  addCategory(name: string) {
    isValidCategory(name);
    if (this.category.includes(name))
      throw new Error("This category already exists");
    this.category.push(name);
  }

  setName(name: string) {
    isValidName(name);
    this.name = name;
  }
}
