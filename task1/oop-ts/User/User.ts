import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";
export type GenderType = "male" | "female";

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export interface IUser {
  id: string;
  firstName: string;
  surname: string;
  birthDate: string;
  password: string;
  gender: GenderType;
  email: string;
  accesLevel: UserRole;
}

export class User implements IUser {
  readonly id = uuid();
  public firstName: string;
  public surname: string;
  public birthDate: string;
  public password: string;
  public gender: GenderType;
  public email: string;
  public accesLevel = UserRole.User;

  constructor(
    firstName: string,
    surname: string,
    birthDate: string,
    password: string,
    gender: GenderType,
    email: string
  ) {
    if (!Validator.isValidName(firstName)) throw new Error("Name is not valid");
    this.firstName = firstName;
    if (!Validator.isValidName(surname))
      throw new Error("Surname is not valid");
    this.surname = surname;
    if (!Validator.isValidBirthDate(birthDate))
      throw new Error("Birthday is not valid");
    this.birthDate = birthDate;
    if (!Validator.isValidGender(gender))
      throw new Error("Gender is not valid");
    this.gender = gender;
    if (!Validator.isValidPassword(password))
      throw new Error("Password is not valid");
    this.password = password;
    if (!Validator.isValidEmail(email)) throw new Error("Email is not valid");
    this.email = email;
  }
}
