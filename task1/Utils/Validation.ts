import { basicDataKeys } from "../oop-ts/newAdressBook/Contact";

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValueValid = (key: basicDataKeys, value: string) => {
  if (key === "name" || key === "surname") {
    if (value.length < 2) return false;

    return true;
  }

  if (key === "email") {
    if (!emailRegexp.test(value)) return false;

    return true;
  }
};
