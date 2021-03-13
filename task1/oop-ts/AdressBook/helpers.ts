import { basicDataKeys, IContact } from "./Contact";

export const updateDate = () => {
  const today = new Date().toLocaleString();
  return today;
};

export const isModifiable = (key: basicDataKeys, name: string) => {
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (key === "email") {
    if (!!emailRegexp.test(name)) {
      return true;
    } else {
      throw new Error("Email is not valid");
    }
  }

  if (key === "name" || key === "surname") {
    if (name.length > 2) {
      return true;
    } else {
      throw new Error("Name is not long enough");
    }
  }

  return false;
};

export const isNameValid = (name: string) => {
  const validation = name.length > 2;

  if (!validation) throw new Error("Name is not valid");

  return true;
};

export const doesContactExistInList = (
  name: string,
  array: Array<IContact>
) => {
  return array.some((el) => el.name === name);
};

export const removeFromList = (name: string, array: Array<IContact>) => {
  if (!doesContactExistInList(name, array))
    throw new Error("Such a contact doesn't exist");

  let copy = [...array];
  copy = copy.filter((el) => el.name !== name);
  return copy;
};
