import React from "react";
import { connect } from "react-redux";
import { addData } from "../../store/actions/fetchActions";
import { setAlphabeticOrder, setCategoryFilter, setDateOrder, search } from "../../store/actions/filterActions";
import { alphabeticSort, sortByAscendingDate } from "../../utils/helpers";
import { SearchIcon, WarningInfoIcon } from "../../utils/icons";
import "./style.css";

const mapStateToProps = ({ filter, fetch }) => {
  return {
    category: filter.category,
    alphabeticOrder: filter.alphabeticOrder,
    dateOrder: filter.dateOrder,
    data: fetch.data,
    immutableData: fetch.immutableData
  };
};

const Header = ({
  category,
  alphabeticOrder,
  dateOrder,
  setAlphabeticOrder,
  setCategoryFilter,
  setDateOrder,
  search,
  data,
  addData,
  immutableData,
}) => {
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategoryFilter(value);

    let filteredData = data.filter((item) => {
      if (item === "All") {
        console.log(immutableData)
        return immutableData;
      }

      return item.category.includes(value);
    });
    addData(filteredData);
  };

  const handleOrderChange = (event) => {
    const value = event.target.value;
    setAlphabeticOrder(value);
    if (value === "Default") {
      addData(immutableData);
    } else {
      value === "Ascending" ? addData(data.sort(alphabeticSort("name"))) : addData(data.sort(alphabeticSort("-name")));
    }
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDateOrder(value);

    if (value === "Default") {
      addData(immutableData);
    } else {
      value === "Ascending" ? addData(data.sort(sortByAscendingDate())) : addData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  };

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    search(input);

    if (input.length < 1) {
      addData(immutableData)
    }

    let filteredData = data.filter((item) => {
      return item.name.includes(input);
    });
    addData(filteredData);
  };

  return (
    <>
      <header>
        <div className="search-input-container">
          <input type="text" id="search" name="search" placeholder="Search Templates" onChange={handleSearch} />
          <SearchIcon />
        </div>
        <div className="filter-container">
          <p>Sort By:</p>
          <div className="filter-item">
            <div className="label">
              <p>Category</p>
            </div>
            <select name="category" onChange={handleCategoryChange} value={category}>
              <option value="All">All</option>
              <option value="Education">Education</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div className="filter-item">
            <div className="label">
              <p>Order</p>
            </div>
            <select name="order" onChange={handleOrderChange} value={alphabeticOrder}>
              <option value="Default">Default</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>

          <div className="filter-item">
            <div className="label">
              <p>Date</p>
            </div>
            <select name="date" onChange={handleDateChange} value={dateOrder}>
              <option value="Default">Default</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
      </header>
      <div className="banner">
        <p>
          <WarningInfoIcon /> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available
          templates
        </p>
      </div>
    </>
  );
};

export default connect(mapStateToProps, { setDateOrder, setCategoryFilter, setAlphabeticOrder, search, addData })(Header);
