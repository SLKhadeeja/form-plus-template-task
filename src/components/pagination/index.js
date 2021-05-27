import React from "react";
import { connect } from "react-redux";
import { setPage } from "../../store/actions/pageActions";
import "./style.css";

const mapStateToProps = ({ pagination, filter }) => {
  return { category: filter.category, alphabeticOrder: filter.alphabeticOrder, dateOrder: filter.dateOrder, page: pagination.page };
};

const Pagination = ({ setPage, page, totalPages }) => {
  return (
    <div className="pagination-container">
      <p onClick={() => setPage(page - 1)} className="page-toggle">
        Previous
      </p>
      <div className="pages">
        <p id="current-page">{page}</p>
        <p>of</p>
        <p>{totalPages}</p>
      </div>
      <p onClick={() => setPage(page + 1)} className="page-toggle">
        Next <i className="fas fa-chevron-right"></i>
      </p>
    </div>
  );
};

export default connect(mapStateToProps, { setPage })(Pagination);
