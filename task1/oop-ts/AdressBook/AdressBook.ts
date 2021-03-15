import { IGroup } from "./Group";
import { IContact, basicDataKeys } from "./Contact";
import {
  doesContactExistInList,
  doesGroupExistInList,
  removeGroupFromList,
  changeGroupName,
  removeContactFromList,
  modifyContent,
} from "./helpers";

export interface IAdressBook {
  groups: Array<IGroup>;
  contactsList: Array<IContact>;
  searchForContact(name: string): Array<IContact>;
  removeContact(name: string): void;
  addContact(contact: IContact): void;
  modifyContact(name: string, key: basicDataKeys, value: string): void;
  addGroup(group: IGroup): void;
  removeGroup(name: string): void;
  changeGroupName(name: string, value: string): void;
}

export class AdressBook implements IAdressBook {
  constructor(
    public groups: Array<IGroup>,
    public contactsList: Array<IContact>
  ) {}

  searchForContact(name: string) {
    const searchedContact = this.contactsList.filter((el) => {
      return el.name.includes(name);
    });
    return searchedContact;
  }

  removeContact(name: string) {
    if (!doesContactExistInList(name, this.contactsList))
      throw new Error("Such a contact doesn't exist");
    const newContacts = removeContactFromList(name, this.contactsList);
    this.contactsList = newContacts;
  }

  addContact(contact: IContact) {
    if (doesContactExistInList(contact.name, this.contactsList))
      throw new Error("Such a contact already exists");
    this.contactsList.push(contact);
  }

  modifyContact(name: string, key: basicDataKeys, value: string) {
    //check if arguments are valid
    //if email - check email
    if (!doesContactExistInList(name, this.contactsList))
      throw new Error("Such a contact doesn't exist");
    const modifiedData = modifyContent(name, key, value, this.contactsList);
    this.contactsList = modifiedData;
  }

  addGroup(group: IGroup) {
    if (doesGroupExistInList(group.name, this.groups))
      throw new Error("Such a group already exist");
    this.groups.push(group);
  }

  removeGroup(name: string) {
    if (!doesGroupExistInList(name, this.groups))
      throw new Error("Such a group doesn't exist");
    const groupList = removeGroupFromList(name, this.groups);
    this.groups = groupList;
  }

  changeGroupName(name: string, value: string) {
    //check if arguments are valid
    if (!doesGroupExistInList(name, this.groups))
      throw new Error("Such a group doesn't exist");
    const changedArray = changeGroupName(name, value, this.groups);
    this.groups = changedArray;
  }
}
