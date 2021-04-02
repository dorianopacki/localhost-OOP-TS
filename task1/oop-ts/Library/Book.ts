import { v4 as uuid } from "uuid";
import { Validator } from "./Validator";

export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  isAvaible: boolean;
}

export class Book implements IBook {
  readonly id = uuid();
  public title: string;
  public author: string;
  public description: string;
  public isAvaible = true;
  constructor(title: string, author: string, description: string) {
    ThrowErrorOn.invalidName(title)
      .and.invalidName(author)
      .and.emptyString(description);

    this.title = title;
    this.author = author;
    this.description = description;

    // if (!Validator.isValidName(title)) throw new Error("Title is not valid");

    // if (!Validator.isValidName(author)) throw new Error("Title is not valid");

    // if (!Validator.isValidDescription(description))
    // throw new Error("Description is not valid");
  }
}
