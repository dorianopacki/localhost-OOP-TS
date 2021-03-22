import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";
export type accesLevel = "User" | "Admin";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  password: string;
  email: string;
  userAccesLevel: accesLevel;
  changePassword: (password: string) => void;
  changeEmail: (email: string) => void;
}

export class User {
  readonly id = uuid();

  public name: string;
  public surname: string;
  public birthDate: string;
  public gender: string;
  public password: string;
  public email: string;
  public userAccesLevel: accesLevel = "User";

  constructor(
    name: string,
    surname: string,
    birthDate: string,
    password: string,
    gender: string,
    email: string
  ) {
    if (!Validator.isValidName(name))
      throw new Error("Name has to be provided");
    this.name = name;
    if (!Validator.isValidName(surname))
      throw new Error("Surname has to be provided");
    this.surname = surname;
    //to validate and transform given birthDate
    this.birthDate = birthDate;
    if (!Validator.isValidPassword(password))
      throw new Error("Password is not valid");
    this.password = password;
    if (!Validator.isValidGender(gender))
      throw new Error("Gender is not valid");
    this.gender = gender;
    if (!Validator.isValidEmail(email)) throw new Error("Email is not valid");
    this.email = email;
  }

  changePassword(password: string) {
    if (!Validator.isValidPassword(password))
      throw new Error("Invalid password");

    this.password = password;
  }

  changeEmail(email: string) {
    if (!Validator.isValidEmail(email)) throw new Error("Invalid email");

    this.email = email;
  }
}
