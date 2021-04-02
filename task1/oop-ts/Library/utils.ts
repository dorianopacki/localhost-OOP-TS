export const calculateFine = (returnDate: string, fine: number) => {
  const shouldReturnBefore = new Date(returnDate);

  const currentDate = new Date();
  const oneDayInMiliseconds = 86400000;

  const daysFromPicking = Math.floor(
    (currentDate.getTime() - shouldReturnBefore.getTime()) / oneDayInMiliseconds
  );

  if (daysFromPicking > 7) {
    const fineForTerm = daysFromPicking * fine;
    return fineForTerm;
  } else {
    return 0;
  }
};
