import task1 from "./task1";
import { Product } from "./task1/oop-ts/newCart/Product";
import { CartItem } from "./task1/oop-ts/newCart/CartItem";
import { Cart } from "./task1/oop-ts/newCart/Cart";
import { User } from "./task1/oop-ts/User/User";
import { Contact } from "./task1/oop-ts/newAdressBook/Contact";
import { AdressBook } from "./task1/oop-ts/newAdressBook/AdressBook";
import App from "./task1/oop-ts/User/App";
import { Admin } from "./task1/oop-ts/User/Admin";
import { Switch } from "./task1/oop-ts/dynamicSwitch/DynamicSwitch";
import { EmailBuilder } from "./task1//oop-ts/emailBuilder/EmailBuilder";

const email = new EmailBuilder("zenek", "zdzisiek", "oddaj rower");
email.setCc(["aaaa", "bbbb", "cccc"]);
console.log(email);
