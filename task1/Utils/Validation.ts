import { basicDataKeys } from "../oop-ts/newAdressBook/Contact";

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
