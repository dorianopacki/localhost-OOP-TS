import { v4 as uuid } from "uuid";
import { isValidName } from "../../Utils/Validation";
import { updateDate, isModifiable } from "./helpers";

export type basicDataKeys = "name" | "surname" | "email";

export interface IContact {
  name: string;
  surname: string;
  email: string;
  modified: string;
  created: string;
  id: string;
  // updateModified(): void;
  modifyBasicData(key: basicDataKeys, name: string): void;
}

// hermetyzacja

export class Contact implements IContact {
  readonly id = uuid();

  public name: string;
  public surname: string;
  public email: string;

  public created = new Date().toLocaleString();
  public modified = new Date().toLocaleString();

  constructor(name: string, surname: string, email: string) {
    // validacja
    this.name = name;
    // validacja

    this.surname = surname;
    // validacja

    this.email = email;
  }

  private _updateModified() {
    const updatedDate = updateDate();
    this.modified = updatedDate;
  }

  modifyBasicData(key: basicDataKeys, name: string) {
    isValidName(name);
    isModifiable(key, name);
    this[key] = name;
    this._updateModified();
  }
}
