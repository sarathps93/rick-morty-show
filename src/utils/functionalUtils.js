export const createSequentialArray = (count) => Array.from({ length: count }, (val, index) => index + 1);

export const isPageVisible = (page = 1, activePage = 1) => {
  const differenceFactor = Math.abs(page - activePage);
  if (differenceFactor > 3 && page !== 1) return false;
  return true;
};

export const getDateDifferenceFromToday = (givenDate) => new Date().getFullYear() - new Date(givenDate).getFullYear();
