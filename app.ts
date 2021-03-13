import task1 from "./task1";
import { CartItem } from "./task1/oop-ts/Cart/CartItem";
import { Cart } from "./task1/oop-ts/Cart/Cart";

const a = new CartItem("chocolate bar", ["sweets"], 5.9, 0);
const b = new CartItem("rice", ["grocery"], 3.9, 0);
const c = new CartItem("water", ["drinks"], 2, 0);
const cart = new Cart([], 0, "SAD");

// console.log(b);
cart.addProduct(a, 1);
cart.addProduct(b, 1);
cart.addProduct(c, 6);
cart.changeQuantity("chocolate bar", 3);
console.log(cart);
