import { v4 as uuid } from "uuid";

export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
}

export class Book implements IBook {
  readonly id = uuid();
  public title: string;
  public author: string;
  public description: string;
  constructor(title: string, author: string, description: string) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
