const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegexp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;

export class Validator {
  static isValidTitle = function (value: string): boolean {
    if (value.length < 1) return false;

    return true;
  };

  static isValidEmail = function (value: string): boolean {
    if (!emailRegexp.test(value)) return false;

    return true;
  };

  static isArrayOfEmails = function (value: Array<string>): boolean {
    if (value.length < 1) return false;
    const eachValue = value.every((email) => emailRegexp.test(email));
    if (!eachValue) return false;

    return true;
  };

  static isValidHtml = function (value: string): boolean {
    if (value.length < 1) return false;

    return true;
  };
}
