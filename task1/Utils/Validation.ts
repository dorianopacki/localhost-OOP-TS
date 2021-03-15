export const isValidNumber = (value: number) => {
  const validation = !isNaN(value) && isFinite(value);

  if (!validation) throw new Error("Given number is not valid");

  return;
};

export const isValidDiscount = (value: number) => {
  const validation =
    !isNaN(value) && isFinite(value) && value <= 100 && value >= 0;

  if (!validation) throw new Error("Given discount value is not valid");

  return;
};

export const isValidCategory = (name: string) => {
  const validation = name.length >= 2;

  if (!validation) throw new Error("Category name is not valid");

  return;
};

export const isValidName = (name: string) => {
  const validation = name.length > 2;

  if (!validation) throw new Error("Given name is not valid");
};

export const isArrayNotEmpty = <T>(array: Array<T>) => {
  const validation = array.length > 0;
  if (!validation) return false;

  return true;
};
