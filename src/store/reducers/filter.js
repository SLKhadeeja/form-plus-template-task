import { SEARCH, SET_ALPHABETICAL_ORDER, SET_CATEGORY_FILTER, SET_DATE_ORDER } from "../actionTypes";
import { FilterInitialState } from "../initialState";

export default function filterFunctions(state = FilterInitialState, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload,
      };

    case SET_ALPHABETICAL_ORDER:
      return {
        ...state,
        alphabeticOrder: action.payload,
      };

    case SET_DATE_ORDER:
      return {
        ...state,
        dateOrder: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };

    default:
      return state;
  }
}
