import { IEmail, Email } from "./Email";
import { Validator } from "./Validator";

export class EmailBuilder {
  private email: IEmail;
  constructor(to: string, from: string, title: string) {
    if (Validator.isValidEmail(to)) throw new Error("Invalid target email");
    if (Validator.isValidEmail(from)) throw new Error("Invalid shipper email");
    if (Validator.isValidTitle(title)) throw new Error("Invalid title");
    this.email = {...}
  }

  setCc(cc: Array<string>) {
    if (!Validator.isArrayOfEmails(cc)) throw new Error("Invalid cc list");
    this.email.cc = cc;
  }

  setBcc(bcc: Array<string>) {
    if (!Validator.isArrayOfEmails(bcc)) throw new Error("Invalid bcc list");
    this.email.bcc = bcc;
  }

  setHtml(html: string) {
    if (!Validator.isValidHtml(html)) throw new Error("Invalid html");
    this.email.html = html;
  }

  build(){
    return new Email(this.email)
  }
}
