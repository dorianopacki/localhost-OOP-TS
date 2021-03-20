import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";

export interface IBook {
  name: string;
  author: string;
  id: string;
  description: string;
}

export class Book implements IBook {
  id = uuid();

  name: string;
  author: string;
  description: string;
  constructor(name: string, author: string, description: string) {
    if (!Validator.isValidName(name)) throw new Error("Name is not valid");
    this.name = name;
    if (!Validator.isValidName(author)) throw new Error("Author is not valid");
    this.author = author;
    if (!Validator.isValidDescription(description))
      throw new Error("Description is not valid");
    this.description = description;
  }
}
