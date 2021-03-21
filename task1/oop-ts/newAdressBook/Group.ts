import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";
import { IContact } from "./Contact";

export interface IGroup {
  groupName: string;
  id: string;
}

export class Group implements IGroup {
  readonly id = uuid();

  private _contactList: Array<IContact>;

  public groupName: string;

  constructor(contactList: Array<IContact>, groupName: string) {
    this._contactList = contactList;
    if (!Validator.isValidName(groupName))
      throw new Error("GroupName is not valid");
    this.groupName = groupName;
  }

  set setGroupName(name: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");

    this.groupName = name;
  }

  doesContactExist(id: string) {
    if (!this._contactList.some((contact) => contact.id === id)) return false;

    return true;
  }

  addContact(contact: IContact) {
    if (this.doesContactExist(contact.id))
      throw new Error("Such a contact already exists");
    this._contactList.push(contact);
  }

  removeContact(id: string) {
    if (!this.doesContactExist(id))
      throw new Error("There is no such a contact");
    const listWithoutContact = this._contactList.filter(
      (contact) => contact !== contact
    );
    this._contactList = listWithoutContact;
  }
}
