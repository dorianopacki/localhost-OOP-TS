import { isValueValid } from "../../Utils/Validation";
import { basicDataKeys, Contact, IContact } from "./Contact";
import { Group, IGroup } from "./Group";

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

  private _doesUserExistInContacts(id: string) {
    if (!this.contactList.some((contact) => contact.id === id)) return false;

    return true;
  }

  searchForContact(phrase: string) {
    const searchItem = this.contactList.filter((contact) =>
      contact.containsPhrase(phrase)
    );

    return searchItem;
  }

  addContact(name: string, surname: string, email: string) {
    const newUser = new Contact(name, surname, email);
    this.contactList.push(newUser);
  }

  removeContact(id: string) {
    if (!this._doesUserExistInContacts(id))
      throw new Error("There is no such a contact");
    const listWithoutContact = this.contactList.filter(
      (contact) => contact.id !== id
    );
    this.contactList = listWithoutContact;
  }

  modifyUser(id: string, key: basicDataKeys, value: string) {
    if (!this._doesUserExistInContacts(id))
      throw new Error("There is no such a contact");
    if (!isValueValid(key, value)) throw new Error("Value is not valid");
    for (let user of this.contactList) {
      if (user.id === id) {
        user[key] = value;
      }
    }
  }

  createGroup(contactList: Array<IContact>, name: string) {
    const newGroup = new Group(contactList, name);
    this.groupList.push(newGroup);
  }

  removeGroup(id: string) {
    const groupListWithoutElement = this.groupList.filter(
      (group) => group.id !== id
    );

    this.groupList = groupListWithoutElement;
  }
}
