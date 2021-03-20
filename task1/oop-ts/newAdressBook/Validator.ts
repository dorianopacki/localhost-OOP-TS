export const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export class Validator {
  static isValidName = function (value: string): boolean {
    if (value.length <= 2) return false;

    return true;
  };

  static isValidEmail = function (value: string): boolean {
    if (!emailRegexp.test(value)) return false;

    return true;
  };
}
