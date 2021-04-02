import { IBook, Book } from "./Book";
import { IBooking, Booking } from "./Booking";
import { calculateFine } from "./utils";

export interface ILibrary {
  booksList: Array<IBook>;
  bookingList: Array<IBooking>;
}

export class Library implements ILibrary {
  public booksList: Array<IBook>;
  public bookingList: Array<IBooking>;
  public fine: number;
  constructor(
    booksList: Array<IBook>,
    bookingList: Array<IBooking>,
    fine: number
  ) {
    this.booksList = booksList;
    this.bookingList = bookingList;
    this.fine = fine;
  }

  private _doesBookExistInList(id: string) {
    if (!this.booksList.some((book) => book.id === id)) return false;

    return true;
  }

  private _isBookAvailable(bookId: string) {
    // .some
    for (let book of this.booksList) {
      if (book.id === bookId) {
        if (book.isAvaible) return true;

        return false;
      }
    }
  }

  private _setBookStatus(bookId: string) {
    for (let book of this.booksList) {
      if (book.id === bookId) {
        book.isAvaible = !book.isAvaible;
      }
    }
  }

  static createBook(title: string, author: string, description: string) {
    return new Book(title, author, description);
  }

  addBook(book: IBook) {
    // brak duplikatów
    this.booksList.push(book);
  }

  removeBook(id: string) {
    if (!this._doesBookExistInList(id))
      throw new Error("Book doesn't exist in list");
    const listWithoutRemovedBook = this.booksList.filter(
      (book) => book.id !== id
    );
    this.booksList = listWithoutRemovedBook;
  }

  landBookForUser(book: IBook, user: IUser) {
    if (!this._doesBookExistInList(bookId))
      throw new Error("This book does not exist in list");
    if (!this._isBookAvailable(bookId))
      throw new Error("This book is not available");

    const landedBook = new Booking(user, userId, this.fine);
    this.bookingList.push(landedBook);
    this._setBookStatus(bookId);
  }

  returnBook(bookId: string) {
    const bookingInfo = this.bookingList.find(
      (booking) => booking.bookId === bookId
    );
    if (!bookingInfo) throw new Error("there is no such a booking");

    const bookingListWithoutReturned = this.bookingList.filter(
      (booking) => booking.bookId !== bookId
    );

    this.bookingList = bookingListWithoutReturned;
    this._setBookStatus(bookId);
    const possibleFine = calculateFine(bookingInfo.bookId, this.fine);
  }
}
