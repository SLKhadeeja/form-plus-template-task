import React from 'react';
import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <p>Previous</p>
      <div className="pages">
        <p id="current-page">1</p>
        <p>of</p>
        <p>46</p>
      </div>
      <p>Next <i className="fas fa-chevron-right"></i></p>
    </div>
  )
}

export default Pagination;
