export interface IUser {
  id: string;
  name: string;
  surname: string;
}

export class User implements IUser {
  public id: string;
  public name: string;
  public surname: string;
  constructor(id: string, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}
