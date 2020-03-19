import { baseAPI } from '../redux/actions';
import { searchfilterOptions } from '../../constants';

export const createSequentialArray = (count) => Array.from({ length: count }, (val, index) => index + 1);

export const isPageVisible = (page = 1, activePage = 1) => {
  const differenceFactor = Math.abs(page - activePage);
  if (differenceFactor > 3 && page !== 1) return false;
  return true;
};

export const getDateDifferenceFromToday = (givenDate) => new Date().getFullYear() - new Date(givenDate).getFullYear();

export const generateSearchUrl = (paramName, value, searchParams, currentPage) => {
  let url = baseAPI;
  url = `${url}?${searchfilterOptions.page}=${currentPage}`;
  if (paramName && value) {
    url = `${url}&${paramName}=${value}`;
  }
  Object.keys(searchParams).forEach((param) => {
    if (param !== paramName && searchParams[param]) {
      url = `${url}&${param}=${searchParams[param]}`;
    }
  });
  return url;
};
