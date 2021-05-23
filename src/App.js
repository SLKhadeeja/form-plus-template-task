import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Loader from "./components/loader";
import Pagination from "./components/pagination";
import TemplateCard from "./components/templateCard";
import { fetchData } from "./store/actions/fetchActions";
import "./styles/App.css";
import { paginate } from "./utils/helpers";

const mapStateToProps = ({ pagination, filter, fetch }) => {
  return {
    category: filter.category,
    alphabeticOrder: filter.alphabeticOrder,
    dateOrder: filter.dateOrder,
    page: pagination.page,
    error: fetch.error,
    message: fetch.message,
    data: fetch.data,
  };
};

function App({ page, message, error, data }) {
  const pageSize = 15;
  const totalPages = Math.ceil(data.length / pageSize);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content-top">
          <p className="title">All Templates</p>
          <p className="template-quantity">{`${data.length}`} templates</p>
        </div>
        <div className="template-cards-wrapper">
          {paginate(data, pageSize, page).map((template) => {
            const { name, description, index } = template;
            return <TemplateCard key={`${name - index}`} name={name} description={description} />;
          })}

          {!error && message === "isLoading" && <Loader />}
        </div>
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default connect(mapStateToProps, { fetchData })(App);
