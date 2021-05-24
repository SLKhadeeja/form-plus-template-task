import { SEARCH, SET_ALPHABETICAL_ORDER, SET_CATEGORY_FILTER, SET_DATE_ORDER } from "../actionTypes";

export const setCategoryFilter = (category) => {
  return {
    type: SET_CATEGORY_FILTER,
    payload: category,
  };
};

export const setAlphabeticOrder = (order) => {
  return {
    type: SET_ALPHABETICAL_ORDER,
    payload: order,
  };
};

export const setDateOrder = (order) => {
  return {
    type: SET_DATE_ORDER,
    payload: order,
  };
};

export const search = (searchInput) => {
  return {
    type: SEARCH,
    payload: searchInput,
  };
};
