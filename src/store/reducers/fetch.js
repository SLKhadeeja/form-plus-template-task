import { GET_DATA_FAILURE, DATA_SUCCESS, ADD_DATA, MUTATE_DATA, DATA_LOADING } from "../actionTypes";
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
        immutableData: action.payload,
      };

    case MUTATE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case DATA_LOADING:
      return {
        ...state,
        message: action.payload,
        error: false,
      };

    default:
      return state;
  }
}
