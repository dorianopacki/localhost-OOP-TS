export interface IBooking {
  bookId: string;
  title: string;
  picked: Date;
  returnDate: Date;
  fine: number;
}

export class Booking implements IBooking {
  bookId: string;
  title: string;
  picked = new Date();
  returnDate = new Date();
  fine: number;
  constructor(bookId: string, title: string, fine: number) {
    this.bookId = bookId;
    this.title = title;
    this.fine = fine;
  }
}
