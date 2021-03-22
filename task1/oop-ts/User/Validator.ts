const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegexp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;

export class Validator {
  static isValidName = function (value: string): boolean {
    if (value.length < 1) return false;

    return true;
  };

  static isValidEmail = function (value: string): boolean {
    if (!emailRegexp.test(value)) return false;

    return true;
  };

  static isValidPassword = function (value: string): boolean {
    if (passwordRegexp.test(value)) return false;

    return true;
  };

  static isValidGender = function (value: string): boolean {
    if (value === "male" || value === "female") return true;

    return false;
  };
}
