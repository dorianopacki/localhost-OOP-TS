import { v4 as uuid } from "uuid";

export interface IBooking {
  pickDate: Date;
  returnDate: Date;
  id: string;
  title: string;
  fine: number;
}

//implement function to manage setting return date + 7 days

export class Booking implements IBooking {
  id = uuid();
  pickDate = new Date();
  returnDate = new Date();
  title: string;
  fine: number;
  constructor(title: string, fine: number) {
    this.title = title;
    this.fine = fine;
  }
}
