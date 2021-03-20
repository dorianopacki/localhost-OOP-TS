import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";

export type basicDataKeys = "name" | "surname" | "email";

export interface IContact {
  name: string;
  surname: string;
  email: string;
  modified: Date;
  created: Date;
  id: string;
}

export class Contact {
  readonly id = uuid();

  public name: string;
  public surname: string;
  public email: string;

  public created = new Date();
  public modified = new Date();

  constructor(name: string, surname: string, email: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.name = name;
    if (!Validator.isValidName(surname))
      throw new Error("Surname is not valid");
    this.surname = surname;
    if (!Validator.isValidEmail(email)) throw new Error("Email is not valid");
    this.email = email;
  }

  private _updateDate() {
    const today = new Date().toLocaleString();
    return today;
  }

  private _updateModified() {
    const updatedDate = this._updateDate();
    //create function to update Data
    this.modified = updatedDate;
  }

  modifyBasicData(key: basicDataKeys, name: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    //check if may modify data
    isModifiable(key, name);
    this[key] = name;
    this._updateModified();
  }
}
