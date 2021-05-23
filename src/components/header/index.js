import React from "react";
import { connect } from "react-redux";
import { setAlphabeticOrder, setCategoryFilter, setDateOrder } from "../../store/actions/filterActions";
import { SearchIcon, WarningInfoIcon } from "../../utils/icons";
import "./style.css";

const mapStateToProps = ({ filter }) => {
  return { category: filter.category, alphabeticOrder: filter.alphabeticOrder, dateOrder: filter.dateOrder };
};

const Header = ({ category, alphabeticOrder, dateOrder, setAlphabeticOrder, setCategoryFilter, setDateOrder }) => {
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleOrderChange = (event) => {
    setAlphabeticOrder(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateOrder(event.target.value);
  };

  return (
    <>
      <header>
        <div className="search-input-container">
          <input type="text" id="search" name="search" placeholder="Search Templates" />
          <SearchIcon />
        </div>
        <div className="filter-container">
          <p>Sort By:</p>
          <div className="filter-item">
            <div className="label">
              <p>Category</p>
            </div>
            <select name="category" onChange={handleCategoryChange} value={category}>
              <option value="volvo">All</option>
              <option value="saab">Education</option>
              <option value="opel">E-commerce</option>
              <option value="audi">Health</option>
            </select>
          </div>

          <div className="filter-item">
            <div className="label">
              <p>Order</p>
            </div>
            <select name="order" onChange={handleOrderChange} value={alphabeticOrder}>
              <option value="volvo">Default</option>
              <option value="saab">Ascending</option>
              <option value="opel">Descending</option>
            </select>
          </div>

          <div className="filter-item">
            <div className="label">
              <p>Date</p>
            </div>
            <select name="date" onChange={handleDateChange} value={dateOrder}>
              <option value="volvo">Default</option>
              <option value="saab">Ascending</option>
              <option value="opel">Descending</option>
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

export default connect(mapStateToProps, { setDateOrder, setCategoryFilter, setAlphabeticOrder })(Header);
