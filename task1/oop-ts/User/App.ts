import { IUser, GenderType, User } from "./User";

export interface IApp {
  listOfUsers: Array<IUser>;
  createUser: (
    firstName: string,
    surname: string,
    birthDate: string,
    password: string,
    gender: GenderType,
    email: string
  ) => void;
  createAdmin: () => void;
}

export class App implements IApp {
  public listOfUsers: Array<IUser>;
  constructor(listOfUsers: Array<IUser>) {
    this.listOfUsers = listOfUsers;
  }

  createUser(
    firstName: string,
    surname: string,
    birthDate: string,
    password: string,
    gender: GenderType,
    email: string
  ) {
    const newUser = new User(
      firstName,
      surname,
      birthDate,
      password,
      gender,
      email
    );
    this.listOfUsers.push(newUser);
  }

  createAdmin() {}
}
