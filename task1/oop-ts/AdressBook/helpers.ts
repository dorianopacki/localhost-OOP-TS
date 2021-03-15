import { basicDataKeys, IContact } from "./Contact";
import { IGroup } from "./Group";

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

// needed
export const doesContactExistInList = (
  name: string,
  array: Array<IContact>
) => {
  return array.some((el) => el.name === name);
};

export const removeFromList = (name: string, array: Array<IContact>) => {
  let copy = [...array];
  copy = copy.filter((el) => el.name !== name);
  return copy;
};

//needed
export const doesGroupExistInList = (name: string, array: Array<IGroup>) => {
  const copy = [...array];
  return copy.some((el) => el.name === name);
};

//needed
export const removeGroupFromList = (name: string, array: Array<IGroup>) => {
  let copy = [...array];
  return (copy = copy.filter((el) => el.name !== name));
};

//needed
export const changeGroupName = (
  name: string,
  value: string,
  array: Array<IGroup>
) => {
  let copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i].name === name) {
      copy[i].name = value;
    }
  }
  return copy;
};

//needed
export const removeContactFromList = (name: string, array: Array<IContact>) => {
  let copy = [...array];
  return copy.filter((el) => el.name !== name);
};

//needed
export const modifyContent = (
  name: string,
  key: basicDataKeys,
  value: string,
  array: Array<IContact>
) => {
  let copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i].name === name) {
      copy[i][key] === value;
    }
  }
  return copy;
};

export const getContactFromList = (name: string, array: Array<IContact>) => {
  const copy = [...array];
  const searchedElement = copy.filter((el) => {
    return el.name.includes(name);
  });
  return searchedElement;
};
