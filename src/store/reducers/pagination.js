import { SET_PAGE } from "../actionTypes";
import { PageInitialState } from "../initialState";

export default function paginationFunctions(state = PageInitialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
}
