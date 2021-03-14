import task1 from "./task1";
import { CartItem } from "./task1/oop-ts/Cart/CartItem";
import { Cart } from "./task1/oop-ts/Cart/Cart";
import { Contact } from "./task1/oop-ts/AdressBook/Contact";
import { Group } from "./task1/oop-ts/AdressBook/Group";
import { AdressBook } from "./task1/oop-ts/AdressBook/AdressBook";

// const a = new CartItem("chocolate bar", ["sweets"], 5.9, 0);
// const b = new CartItem("rice", ["grocery"], 3.9, 0);
// const c = new CartItem("water", ["drinks"], 2, 0);
// const cart = new Cart([], 0, "SAD");

// console.log(b);
// cart.addProduct(a, 1);
// cart.addProduct(b, 1);
// cart.addProduct(c, 6);
// cart.changeQuantity("chocolate bar", 3);
// console.log(cart);

const dorian = new Contact("Dorian", "Opacki", "dorianwew@gmail.com");
const maciek = new Contact("Maciek", "Tessmer", "dorianwew@gmail.com");
const pawel = new Contact("Pawel", "Rzydski", "dorianwew@gmail.com");
const damian = new Contact("Damian", "Margas", "dorianwew@gmail.com");
const b = new Group([dorian, maciek, pawel], "nowe");
// b.changeGroupName("stare");
// console.log(b.doesContactExist("Dorian"));
// b.removeContact("Dorian");
// b.addContact(a);
// console.log(b);
const e = new AdressBook([b], [dorian, maciek, pawel]);
e.modifyContact("Dorian", "email", "dod@wp.pl");
console.log(e);
