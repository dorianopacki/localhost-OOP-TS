import { IContact } from "./Contact";
import { isNameValid, doesContactExistInList, removeFromList } from "./helpers";
import { v4 as uuid } from "uuid";

export interface IGroup {
  contactList: Array<IContact>;
  name: string;
  id: string;
}

export class Group implements IGroup {
  constructor(
    public contactList: Array<IContact>,
    public name: string,
    readonly id = uuid()
  ) {}

  changeGroupName(name: string) {
    //check if name is valid
    isNameValid(name);
    //change group name
    this.name = name;
  }

  doesContactExist(name: string) {
    //is name valid
    //does exist in array
    if (doesContactExistInList(name, this.contactList)) {
      return true;
    }

    return false;
  }

  addContact(contact: IContact) {
    //is contact valid
    if (doesContactExistInList(contact.name, this.contactList))
      throw new Error("Such a contact already exists");
    //push to array

    this.contactList.push(contact);
  }

  removeContact(name: string) {
    //check if exists
    const listAfterRemove = removeFromList(name, this.contactList);
    this.contactList = listAfterRemove;
    //remove
  }
}
