import { IContact } from "./Contact";
import { IGroup } from "./Group";

export interface IAdressBook {
  contactList: Array<IContact>;
  groupList: Array<IGroup>;
}

export class AdressBook implements IAdressBook {
  public contactList: Array<IContact>;
  public groupList: Array<IGroup>;

  constructor(contactList: Array<IContact>, groupList: Array<IGroup>) {
    this.contactList = contactList;
    this.groupList = groupList;
  }

  searchForContact(name: string) {
    const searchItem = this.contactList.filter((contact) =>
      contact.name.includes(name)
    );

    return searchItem;
  }

  addContact(value: IContact) {
    this.contactList.push(value);
  }

  removeContact(id: string) {
    if (!this.contactList.some((contact) => contact.id === id))
      throw new Error("There is no such a contact");
    const listWithoutContact = this.contactList.filter(
      (contact) => contact.id !== id
    );
    this.contactList = listWithoutContact;
  }

  modifyUser(id: string) {
    if (!this.contactList.some((contact) => contact.id === id))
      throw new Error("There is no such a contact");
  }
}
