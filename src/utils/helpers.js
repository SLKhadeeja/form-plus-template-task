export const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export const alphabeticSort = (property) => {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
};

export const sortByAscendingDate = () => {
  return function (a, b) {
    var key1 = new Date(a.date);
    var key2 = new Date(b.date);

    if (key1 < key2) {
      return -1;
    } else if (key1 === key2) {
      return 0;
    } else {
      return 1;
    }
  };
};
