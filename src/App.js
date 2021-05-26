import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Loader from "./components/loader";
import Pagination from "./components/pagination";
import TemplateCard from "./components/templateCard";
import { fetchData } from "./store/actions/fetchActions";
import "./styles/App.css";
import { paginate } from "./utils/helpers";

const mapStateToProps = ({ pagination, fetch, filter }) => {
  return {
    page: pagination.page,
    error: fetch.error,
    message: fetch.message,
    data: fetch.data,
    category: filter.category
  };
};

function App({ page, message, error, data, category }) {
  const pageSize = 15;
  const totalPages = Math.ceil(data.length / pageSize);
  const [workingData, setWorkingData] = useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setWorkingData(data);
  }, [data])

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content-top">
          <p className="title">All Templates</p>
          <p className="template-quantity">{`${data.length}`} templates</p>
        </div>
        <div className="template-cards-wrapper">
          {paginate(workingData, pageSize, page).map((template) => {
            const { name, description } = template;

            return <TemplateCard key={`${name}-${Math.random()}`} name={name} description={description} />;
          })}

          {!error && message === "isLoading" && <Loader />}

          {message !== "isLoading" && data.length < 1 && <p id="empty-array">No available Template</p>} 
        </div>
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default connect(mapStateToProps, { fetchData })(App);
