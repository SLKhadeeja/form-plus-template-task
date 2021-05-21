import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <>
    <header>
      <div className="search-input-container">
        <input type="text" id="search" name="search" placeholder="Search Templates" />

      </div>
      <div className="filter-container">
        <p>Sort By:</p>
        <div className="filter-item">
          <select name="category">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="filter-item">
          <select name="order">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="filter-item">
          <select name="date">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </header>
    <div className="banner">
      <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
    </div>
    </>
  )
}

export default Header;
