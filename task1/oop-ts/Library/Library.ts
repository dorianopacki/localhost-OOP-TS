import { IBook, Book } from "./Book";
import { IBooking, Booking } from "./Booking";
import { IUser, User } from "./User";

export interface ILibrary {
  booksList: Array<IBook>;
  bookingList: Array<IBooking>;
  pickedBooks: Array<IBook>;
}

export class Library implements ILibrary {
  public booksList: Array<IBook>;
  public bookingList: Array<IBooking>;
  public pickedBooks: Array<IBook>;
  constructor(
    booksList: Array<IBook>,
    bookingList: Array<IBooking>,
    pickedBooks: Array<IBook>
  ) {
    this.booksList = booksList;
    this.bookingList = bookingList;
    this.pickedBooks = pickedBooks;
  }

  private _doesBookExistInList(id: string) {
    if (!this.booksList.some((book) => book.id === id)) return false;

    return true;
  }

  addBook(title: string, author: string, description: string) {
    const newBook = new Book(title, author, description);
    this.booksList.push(newBook);
  }

  removeBook(id: string) {
    if (!this._doesBookExistInList(id))
      throw new Error("Book doesn't exist in list");
    const listWithoutRemovedBook = this.booksList.filter(
      (book) => book.id !== id
    );
    this.booksList = listWithoutRemovedBook;
  }

  landBookForUser(bookId: string, userId: string) {
    //validacja
    if (!this._doesBookExistInList(bookId))
      throw new Error("This book does not exist in list");
  }
  //todo
  // - dodawanie książek do listy
  // - usuwanie książek z listy
  // - wypożyczanie książki dla usera X
  // - oddanie wypożyczania książki
}
