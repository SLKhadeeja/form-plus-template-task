import React from 'react';
import { SearchIcon, WarningInfoIcon } from '../../utils/icons';
import "./style.css";

const Header = () => {
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
          <div className="label"><p>Category</p></div>
          <select name="category">
            <option value="volvo">All</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="filter-item">
        <div className="label"><p>Order</p></div>
          <select name="order">
            <option value="volvo">Default</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="filter-item">
        <div className="label"><p>Date</p></div>
          <select name="date">
            <option value="volvo">Default</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </header>
    <div className="banner">
      <p><WarningInfoIcon /> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
    </div>
    </>
  )
}

export default Header;
