import { Validator } from "../User/Validator";
import { Admin } from "./Admin";
import { GenderType, IUser, User, UserRole } from "./User";

export interface IUserManager {
  changeUserRole: (id: string, accesLevel: UserRole) => void;
  changeUserEmail: (id: string, email: string) => void;
  changeUserPassword: (id: string, password: string) => void;
}

export interface IApp extends IUserManager {
  usersList: Array<IUser>;
  createUser: (
    firstName: string,
    surname: string,
    email: string,
    password: string,
    gender: GenderType
  ) => void;
  createAdmin: (
    firstName: string,
    surname: string,
    email: string,
    password: string,
    gender: GenderType
  ) => void;
}

class App implements IApp {
  private static _instance: App;

  public usersList: Array<IUser>;
  private constructor(usersList: Array<IUser>) {
    this.usersList = usersList;
  }
  static getInstance(): App {
    if (!App._instance) {
      App._instance = new App([]);
    }
    return App._instance;
  }

  private _doesUserExist(id: string): boolean {
    if (!this.usersList.some((user) => user.id === id)) return false;

    return true;
  }

  createUser(
    firstName: string,
    surname: string,
    email: string,
    password: string,
    gender: GenderType
  ): void {
    const newUser = new User(
      firstName,
      surname,
      email,
      password,
      gender,
      email
    );

    this.usersList.push(newUser);
  }

  createAdmin(
    firstName: string,
    surname: string,
    email: string,
    password: string,
    gender: GenderType
  ): void {
    const newAdmin = new Admin(
      firstName,
      surname,
      email,
      password,
      gender,
      email
    );
    this.usersList.push(newAdmin);
  }

  changeUserRole(id: string, accesLevel: UserRole): void {
    if (!this._doesUserExist(id)) throw new Error("No such a user");
    this.usersList.forEach((user) => {
      if (user.id === id) {
        user.accesLevel = accesLevel;
      }
    });
  }

  changeUserEmail(id: string, email: string): void {
    if (!this._doesUserExist(id)) throw new Error("No such a user");
    if (!Validator.isValidEmail(email)) throw new Error("Email is not valid");
    this.usersList.forEach((user) => {
      if (user.id === id) {
        user.email = email;
      }
    });
  }
  changeUserPassword(id: string, password: string): void {
    if (!this._doesUserExist(id)) throw new Error("No such a user");
    if (!Validator.isValidEmail(password))
      throw new Error("Password is not valid");
    this.usersList.forEach((user) => {
      if (user.id === id) {
        user.password = password;
      }
    });
  }
}

export default App;
