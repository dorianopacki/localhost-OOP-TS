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

  addContact(contact: IContact) {}

  removeContact(id: string) {}

  modifyUser(id: string) {}
}
