import { Validator } from "./Validator";
import { v4 as uuid } from "uuid";

export interface IUser {
  id: string;
  name: string;
  surname: string;
}

export class User implements IUser {
  readonly id = uuid();
  public name: string;
  public surname: string;
  constructor(name: string, surname: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.name = name;
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.surname = surname;
  }
}
