import { User, GenderType, UserRole } from "./User";

export class Admin extends User {
  constructor(
    public firstName: string,
    public surname: string,
    public birthDate: string,
    public password: string,
    public gender: GenderType,
    public email: string,
    public accesLevel = UserRole.Admin
  ) {
    super(firstName, surname, birthDate, password, gender, email);
  }
}
