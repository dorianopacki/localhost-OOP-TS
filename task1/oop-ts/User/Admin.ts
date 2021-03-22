import { v4 as uuid } from "uuid";
import { IUserManager } from "./App";
import { accesLevel, IUser, User } from "./User";

export interface IAdmin extends IUser, IUserManager {}

export class Admin extends User implements IAdmin {
  constructor(
    name: string,
    surname: string,
    birthDate: string,
    password: string,
    gender: string,
    email: string
  ) {
    super(name, surname, birthDate, password, gender, email);
  }

  changeUserPassword() {}

  changeUserAccesLevel() {}

  changeUserEmail() {}
}
