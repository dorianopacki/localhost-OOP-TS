export interface IBooking {
  bookId: string;
  title: string;
  picked: Date;
  returnDate: Date;
  fine: number;
}

export class Booking implements IBooking {
  readonly bookId: string;
  public title: string;
  public picked = new Date();
  public returnDate = new Date();
  public fine: number;
  constructor(bookId: string, title: string, fine: number) {
    this.bookId = bookId;
    this.title = title;
    this.fine = fine;
  }

  // booking to wiele książek
  // booking powinna zawierac klasę user

  // dodać książke
  // odjac książke
  // przeliczyć fine
}
