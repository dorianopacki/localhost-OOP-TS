export class Validator {
  static isValidName = function (value: string): boolean {
    if (value.length <= 2) return false;

    return true;
  };

  static isValidValue = function (value: number): boolean {
    if (isNaN(value) || !isFinite(value)) return false;

    return true;
  };

  static isValidCategory = function (value: Array<string>): boolean {
    if (value.length < 1) return false;

    return true;
  };

  static isValidAmount = function (value: number): boolean {
    if (isNaN(value) || !isFinite(value) || !Number.isInteger(value))
      return false;

    return true;
  };

  static isValidDiscountCode = function (value: string): boolean {
    if (value.length < 8) return false;

    return true;
  };
}
