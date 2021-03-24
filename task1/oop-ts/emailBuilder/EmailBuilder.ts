interface IEmail {
  title: string;
  to: string;
  from: string;
  cc?: Array<string>;
  bcc?: Array<string>;
  html?: string;
}

export class Email implements IEmail {
  public to: string;
  public from: string;
  public title: string;
  constructor(to: string, from: string, title: string) {
    this.to = to;
    this.from = from;
    this.title = title;
  }
}

export class EmailBuilder {
  public email: IEmail;
  constructor(to: string, from: string, title: string) {
    this.email = new Email(to, from, title);
  }

  setCc(cc: Array<string>) {
    this.email.cc = cc;
  }

  setBcc(cc: Array<string>) {
    this.email.cc = cc;
  }

  setHtml(html: string) {
    this.email.html = html;
  }
}
