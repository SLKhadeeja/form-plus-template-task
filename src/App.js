import React, { useEffect } from "react";
import { connect } from "react-redux";
import Error from "./components/error";
import Header from "./components/header";
import Loader from "./components/loader";
import Pagination from "./components/pagination";
import TemplateCard from "./components/templateCard";
import { fetchData } from "./store/actions/fetchActions";
import "./styles/App.css";
import { alphabeticSort, paginate, sortByAscendingDate } from "./utils/helpers";

const mapStateToProps = ({ pagination, fetch, filter }) => {
  return {
    page: pagination.page,
    error: fetch.error,
    message: fetch.message,
    data: fetch.data,
    alphabeticOrder: filter.alphabeticOrder,
    dateOrder: filter.dateOrder,
    searchInput: filter.searchInput,
  };
};

function App({ page, message, error, data, alphabeticOrder, dateOrder, searchInput }) {
  const pageSize = 15;
  const totalPages = Math.ceil(data.length / pageSize);
  let sortedData =
    alphabeticOrder === "Default"
      ? dateOrder === "Default"
        ? data
        : dateOrder === "Ascending"
        ? data.sort(sortByAscendingDate())
        : data.sort((a, b) => new Date(b.date) - new Date(a.date))
      : alphabeticOrder === "Ascending"
      ? data.sort(alphabeticSort("name"))
      : data.sort(alphabeticSort("-name"));

  const workingData =
    searchInput.length < 1
      ? sortedData
      : sortedData.filter((item) => {
          return item.name.includes(searchInput);
        });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <Header fetch={message} />
        {!error && message === "isLoading" && <Loader />}
        {!error && message === "sucessful" && (
          <>
            <div className="content">
              <div className="content-top">
                <p className="title">All Templates</p>
                <p className="template-quantity">{`${workingData.length}`} templates</p>
              </div>
              <div className="template-cards-wrapper">
                {paginate(workingData, pageSize, page).map((template) => {
                  const { name, description } = template;

                  return <TemplateCard key={`${name}-${Math.random()}`} name={name} description={description} />;
                })}

                {message !== "isLoading" && data.length < 1 && <p id="empty-array">No available Template</p>}
              </div>
            </div>
            <Pagination totalPages={totalPages} />{" "}
          </>
        )}
      </div>
      {error && <Error message={"An Error has occured, Please reload the page"} />}
    </>
  );
}

export default connect(mapStateToProps, { fetchData })(App);
