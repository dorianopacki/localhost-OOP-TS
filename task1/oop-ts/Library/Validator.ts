export class Validator {
  static isValidName = function (value: string): boolean {
    if (value.length < 1) return false;

    return true;
  };

  static isValidDescription = function (value: string): boolean {
    if (value.length < 20) return false;

    return true;
  };
}
