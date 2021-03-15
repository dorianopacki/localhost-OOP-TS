import task1 from "./task1";
import { CartItem } from "./task1/oop-ts/Cart/CartItem";
import { Cart } from "./task1/oop-ts/Cart/Cart";
import { Contact } from "./task1/oop-ts/AdressBook/Contact";
import { Group } from "./task1/oop-ts/AdressBook/Group";
import { AdressBook } from "./task1/oop-ts/AdressBook/AdressBook";

const bar = new CartItem("snickers", ["chocolate bar"], 5.9, 0);
// const bar2 = new CartItem("snickers", ["chocolate bar"], 5.9, 0);
const newcart = new Cart([{ quantity: 1, product: bar }], 0, "");
console.log(newcart);
