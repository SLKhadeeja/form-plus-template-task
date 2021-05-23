import { combineReducers } from "@reduxjs/toolkit";
import fetchFunctions from "./fetch";
import filterFunctions from "./filter";
import paginationFunctions from "./pagination";

export const rootReducer = combineReducers({
  filter: filterFunctions,
  pagination: paginationFunctions,
  fetch: fetchFunctions,
});
