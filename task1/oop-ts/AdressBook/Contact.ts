import { v4 as uuid } from "uuid";
import { updateDate, isModifiable } from "./helpers";

export interface IContact {
  name: string;
  surname: string;
  email: string;
  modified: string;
  created: string;
  id: string;
}

export type basicDataKeys = "name" | "surname" | "email";

export class Contact implements IContact {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public modified = "-",
    public created = new Date().toLocaleString(),
    readonly id = uuid()
  ) {}

  updateModified() {
    const updatedDate = updateDate();
    this.modified = updatedDate;
  }

  modifyBasicData(key: basicDataKeys, name: string) {
    //validate if name is valid
    isModifiable(key, name);
    this[key] = name;
    this.updateModified();
  }
}
