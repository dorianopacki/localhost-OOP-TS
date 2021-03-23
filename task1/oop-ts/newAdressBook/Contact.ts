import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";
import { isValueValid } from "../../Utils/Validation";

export type basicDataKeys = "name" | "surname" | "email";

export interface IContact {
  name: string;
  surname: string;
  email: string;
  modified: Date;
  created: Date;
  id: string;
}

export class Contact implements IContact {
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

  private _updateModified() {
    const currentDate = new Date();
    this.modified = currentDate;
  }

  modifyBasicData(key: basicDataKeys, value: string) {
    if (!isValueValid(key, value)) throw new Error("Value is not valid");
    this[key] = value;
    this._updateModified();
  }
}
