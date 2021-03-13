import { ICartItem } from "./CartItem";
import { productType } from "./Cart";

export const priceAfterDiscount = (value: number, price: number) => {
  if (value > 0) {
    const copy = price;
    const discount = (copy / 100) * value;
    const newPrice = parseFloat((price - discount).toFixed(2));
    return newPrice;
  } else {
    return price;
  }
};

export const sumOfProductsPrice = (array: Array<productType>): number => {
  const copy = [...array];
  const sum = copy.reduce((acc, av) => {
    acc = +av.product.price;
    return acc;
  }, 0);
  return sum;
};

export const removeItem = (array: Array<productType>, name: string) => {
  let copy = [...array];
  copy = copy.filter((el) => el.product.name !== name);

  return copy;
};

export const doesProductExist = (array: Array<productType>, name: string) => {
  const toSearch = new RegExp(name.toString(), "gi");
  if (array.some((el) => !!el.product.name.match(toSearch))) {
    return true;
  } else {
    throw new Error("This product doesn't exist on list");
  }
};

export const changeQuantityOnList = (
  products: Array<productType>,
  quantity: number,
  name: string
) => {
  const toSearch = new RegExp(name.toString(), "gi");
  const copy = [...products].map((el) => {
    if (el.product.name.match(toSearch)) {
      el.quantity = quantity;
      return el;
    } else {
      return el;
    }
  });
  return copy;
};
