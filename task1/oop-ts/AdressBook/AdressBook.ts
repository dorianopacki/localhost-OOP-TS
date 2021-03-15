import { IGroup } from "./Group";
import { IContact, basicDataKeys } from "./Contact";
import {
  doesContactExistInList,
  doesGroupExistInList,
  removeGroupFromList,
  changeGroupName,
  removeContactFromList,
  modifyContent,
  isModifiable,
  getContactFromList,
} from "./helpers";
import { isValidName } from "../../Utils/Validation";

export interface IAdressBook {
  groups: Array<IGroup>;
  addGroup(group: IGroup): void;
  removeGroup(name: string): void;
  changeGroupName(name: string, value: string): void;

  contactsList: Array<IContact>;
  searchForContact(name: string): Array<IContact>;
  removeContact(name: string): void;
  addContact(contact: IContact): void;
  modifyContact(name: string, key: basicDataKeys, value: string): void;
}

export class AdressBook implements IAdressBook {
  constructor(
    public groups: Array<IGroup>,
    public contactsList: Array<IContact>
  ) {}

  searchForContact(name: string) {
    const searchedContact = getContactFromList(name, this.contactsList);
    if (searchedContact.length < 1)
      throw new Error("Couldn't find that contact");

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
    isModifiable(key, name);
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
    isValidName(name);
    if (!doesGroupExistInList(name, this.groups))
      throw new Error("Such a group doesn't exist");
    const changedArray = changeGroupName(name, value, this.groups);
    this.groups = changedArray;
  }
}
