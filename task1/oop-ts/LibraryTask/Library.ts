import { IBook } from "./Book";
import { IBooking } from "./Booking";

export interface ILibrary {
  booksList: Array<IBook>;
  bookingList: Array<IBooking>;
  borrowedList: Array<IBook>;
}
