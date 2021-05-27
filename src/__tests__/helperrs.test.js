import { alphabeticSort, sortByAscendingDate } from "../utils/helpers";

const test_date_1 = new Date("Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)");
const test_date_2 = new Date("Wed Jan 14 2020 05:00:00 GMT+0100 (West Africa Standard Time)");
const test_date_3 = new Date("Wed Nov 9 2001 09:00:00 GMT+0100 (West Africa Standard Time)");

const sampleArray = [
  { name: "dark", date: test_date_1 },
  { name: "light", date: test_date_2 },
  { name: "standard", date: test_date_3 },
];

describe("actions", () => {
  it("should test all helper functions", () => {
    expect(sampleArray.sort(alphabeticSort("name"))).toEqual([
      { name: "dark", date: test_date_1 },
      { name: "light", date: test_date_2 },
      { name: "standard", date: test_date_3 },
    ]);
    expect(sampleArray.sort(sortByAscendingDate())).toEqual([
      { name: "standard", date: test_date_3 },
      { name: "dark", date: test_date_1 },
      { name: "light", date: test_date_2 },
    ]);
  });
});
