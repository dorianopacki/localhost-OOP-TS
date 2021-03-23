import task1 from "./task1";
import { Product } from "./task1/oop-ts/newCart/Product";
import { CartItem } from "./task1/oop-ts/newCart/CartItem";
import { Cart } from "./task1/oop-ts/newCart/Cart";
import { User } from "./task1/oop-ts/User/User";
import { Contact } from "./task1/oop-ts/newAdressBook/Contact";
import { AdressBook } from "./task1/oop-ts/newAdressBook/AdressBook";

// const bar = new Product("snickers", ["low_sugar"], 5, 0);
// const water = new Product("fiji", ["drinks"], 2, 0);
// const rice = new Product("uncle_ben", ["bio"], 2, 0);

// const item = new CartItem(2, bar);
// const item2 = new CartItem(6, water);
// const item3 = new CartItem(3, rice);

// const koszyk = new Cart([item, item2, item3], 50);
// console.log(koszyk);

const a = new User(
  "Dorian",
  "Opacki",
  "21/05/1998",
  "Fabianek12#",
  "male",
  "ssq21@wp.pl"
);
console.log(a);
