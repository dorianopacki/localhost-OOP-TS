import { v4 as uuid } from "uuid";

interface IContact {
  name: string;
  surname: string;
  email: string;
  modified: string;
  created: string;
  id: string;
}
export class Contact implements IContact {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public modified: string = "---",
    readonly created: string,
    readonly id: string
  ) {
    this.id = uuid();
    this.created = new Date().toLocaleString();
  }
}

// interface IContact {
//   private name: string;
//   private surname: string;
//   private email: string;
//   private modified: string;
//   private created: string;
//   private uuid: string;
// }

//   name: string;
//   surname: string;
//   email: string;
//   modified: string;
//   created: string;
//   uuid: string;
