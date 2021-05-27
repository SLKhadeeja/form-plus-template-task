import React from "react";
import "./style.css";

const Error = ({ message }) => {
  return (
    <div className="wrapper">
      <div id="error-container">
        <i className="fas fa-times"></i>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
