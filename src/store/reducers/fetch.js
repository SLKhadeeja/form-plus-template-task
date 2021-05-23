import { GET_DATA_FAILURE, DATA_SUCCESS, ADD_DATA } from "../actionTypes";
import { FetchInitialState } from "../initialState";

export default function fetchFunctions(state = FetchInitialState, action) {
  switch (action.type) {
    case GET_DATA_FAILURE:
      return {
        ...state,
        message: action.payload,
        error: true,
      };

    case DATA_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: false,
      };

    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
