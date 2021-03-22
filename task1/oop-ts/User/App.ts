import { IUser, User, accesLevel } from "./User";
import { Validator } from "./Validator";

export interface IUserManager {
  changeUserPassword: (id: string, password: string) => void;
  changeUserEmail: (id: string, email: string) => void;
  changeUserAccesLevel: (id: string, accesLevel: accesLevel) => void;
}

export interface IApp extends IUserManager {
  listOfUsers: Array<IUser>;
  createUser: (
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: string,
    birthDate: string
  ) => void;
  createAdmin: (user: IUser) => void;
}

export class App implements IApp {
  public listOfUsers: Array<IUser>;

  constructor(listOfUsers: Array<IUser>) {
    this.listOfUsers = listOfUsers;
  }

  private _doesUserExist(id: string) {
    if (!this.listOfUsers.some((char) => char.id === id)) return false;

    return true;
  }

  createUser(
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: string,
    birthDate: string
  ) {
    const newUser = new User(name, surname, email, password, gender, birthDate);

    this.listOfUsers.push(newUser);
  }

  //implement after getting admin interface
  createAdmin(user: IUser) {}

  //refactor code to get rid off repetive code below
  changeUserPassword(id: string, password: string) {
    if (!this._doesUserExist(id)) throw new Error("Such a user doesn't exists");
    if (!Validator.isValidPassword(password))
      throw new Error("Password is invalid");

    for (let user of this.listOfUsers) {
      if (user.id === id) {
        user.password = password;
      }
    }
  }

  changeUserEmail(id: string, email: string) {
    if (!this._doesUserExist(id)) throw new Error("Such a user doesn't exists");
    if (!Validator.isValidEmail(email)) throw new Error("Email is invalid");

    for (let user of this.listOfUsers) {
      if (user.id === id) {
        user.email = email;
      }
    }
  }

  changeUserAccesLevel(id: string, accesLevel: accesLevel) {
    if (!this._doesUserExist(id)) throw new Error("Such a user doesn't exists");

    for (let user of this.listOfUsers) {
      if (user.id === id) {
        user.userAccesLevel = accesLevel;
      }
    }
  }
}
