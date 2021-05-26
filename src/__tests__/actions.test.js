import { addData, hasfailed } from "../store/actions/fetchActions";
import { search, setAlphabeticOrder, setCategoryFilter, setDateOrder } from "../store/actions/filterActions";
import { setPage } from "../store/actions/pageActions";
import { GET_DATA_FAILURE, MUTATE_DATA, SEARCH, SET_ALPHABETICAL_ORDER, SET_CATEGORY_FILTER, SET_DATE_ORDER, SET_PAGE } from "../store/actionTypes";

const sampleData = [{"name": "a name", "date": "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)"}, {"name": "another  name", "date": "Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)"}]

describe("actions", () => {
  it("should create an actions for fetch", () => {
    expect(hasfailed("failed")).toEqual({type: GET_DATA_FAILURE, payload: "failed"});
    expect(addData(sampleData)).toEqual({type: MUTATE_DATA, payload: sampleData});
  });

  it("should create an actions for filter", () => {
    expect(setAlphabeticOrder("Descending")).toEqual({type: SET_ALPHABETICAL_ORDER, payload: "Descending"});
    expect(setDateOrder("Ascending")).toEqual({type: SET_DATE_ORDER, payload: "Ascending"});
    expect(setCategoryFilter("Health")).toEqual({type: SET_CATEGORY_FILTER, payload: "Health"});
    expect(search("amm")).toEqual({type: SEARCH, payload: "amm"});
  });

  it("should create actions for pagination", () => {
    expect(setPage(100)).toEqual({type: SET_PAGE, payload: 100});
  })
});