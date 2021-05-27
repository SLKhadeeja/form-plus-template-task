import {
  ADD_DATA,
  DATA_LOADING,
  DATA_SUCCESS,
  GET_DATA_FAILURE,
  MUTATE_DATA,
  SEARCH,
  SET_ALPHABETICAL_ORDER,
  SET_CATEGORY_FILTER,
  SET_DATE_ORDER,
  SET_PAGE,
} from "../store/actionTypes";
import { FetchInitialState, FilterInitialState, PageInitialState } from "../store/initialState";
import fetchFunctions from "../store/reducers/fetch";
import filterFunctions from "../store/reducers/filter";
import paginationFunctions from "../store/reducers/pagination";

describe("all reducers", () => {
  it("should handle fetch stages", () => {
    expect(
      fetchFunctions(FetchInitialState, {
        type: GET_DATA_FAILURE,
        payload: "fetch has failed",
      })
    ).toEqual({
      ...FetchInitialState,
      message: "fetch has failed",
      error: true,
    });

    expect(
      fetchFunctions(FetchInitialState, {
        type: DATA_SUCCESS,
        payload: "sucessful",
      })
    ).toEqual({
      ...FetchInitialState,
      message: "sucessful",
      error: false,
    });

    expect(
      fetchFunctions(FetchInitialState, {
        type: DATA_LOADING,
        payload: "isLoading",
      })
    ).toEqual({
      ...FetchInitialState,
      message: "isLoading",
      error: false,
    });

    expect(
      fetchFunctions(FetchInitialState, {
        type: ADD_DATA,
        payload: [
          { name: "a name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
          { name: "another  name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
        ],
      })
    ).toEqual({
      ...FetchInitialState,
      data: [
        { name: "a name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
        { name: "another  name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
      ],
      immutableData: [
        { name: "a name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
        { name: "another  name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
      ],
    });

    expect(
      fetchFunctions(FetchInitialState, {
        type: MUTATE_DATA,
        payload: [
          { name: "a name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
          { name: "another  name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
        ],
      })
    ).toEqual({
      ...FetchInitialState,
      data: [
        { name: "a name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
        { name: "another  name", date: "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)" },
      ],
    });
  });

  it("should handle filter stages", () => {
    expect(
      filterFunctions(FilterInitialState, {
        type: SET_CATEGORY_FILTER,
        payload: "Education",
      })
    ).toEqual({
      ...FilterInitialState,
      category: "Education",
    });

    expect(
      filterFunctions(FilterInitialState, {
        type: SET_ALPHABETICAL_ORDER,
        payload: "Default",
      })
    ).toEqual({
      ...FilterInitialState,
      alphabeticOrder: "Default",
    });

    expect(
      filterFunctions(FilterInitialState, {
        type: SET_DATE_ORDER,
        payload: "Ascending",
      })
    ).toEqual({
      ...FilterInitialState,
      dateOrder: "Ascending",
    });

    expect(
      filterFunctions(FilterInitialState, {
        type: SEARCH,
        payload: "vein",
      })
    ).toEqual({
      ...FilterInitialState,
      searchInput: "vein",
    });
  });

  it("should handle pagination", () => {
    expect(
      paginationFunctions(PageInitialState, {
        type: SET_PAGE,
        payload: 2,
      })
    ).toEqual({
      page: 2,
    });
  });
});
