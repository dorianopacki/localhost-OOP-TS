import { IContact } from "./Contact";
import { isNameValid, doesContactExistInList, removeFromList } from "./helpers";
import { v4 as uuid } from "uuid";

interface withUUID {
  readonly id: string;
}
interface withName {
  readonly name: string;
}

export interface IGroup {
  contactList: Array<IContact>;
  changeGroupName(name: string): void;
  doesContactExist(contact: IContact): boolean;
  addContact(contact: IContact): void;
  removeContact(contact: IContact): void;
}

export class Group implements withUUID, withName, IGroup {
  constructor(
    public contactList: Array<IContact>,
    public name: string,
    readonly id = uuid()
  ) {}

  changeGroupName(name: string) {
    isNameValid(name);
    this.name = name;
  }

  doesContactExist(contact: IContact) {
    isNameValid(name);
    if (!doesContactExistInList(name, this.contactList)) return false;

    return true;
  }

  addContact(contact: IContact) {
    if (doesContactExistInList(contact.name, this.contactList))
      throw new Error("Such a contact already exists");

    this.contactList.push(contact);
  }

  removeContact(name: string) {
    isNameValid(name);
    if (!doesContactExistInList(name, this.contactList))
      throw new Error("Such a contact doesn't exist");

    const listAfterRemove = removeFromList(name, this.contactList);
    this.contactList = listAfterRemove;
  }
}
