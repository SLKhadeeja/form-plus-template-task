import React from "react";
import "./style.css";

const TemplateCard = ({ name, description }) => {
  return (
    <div className="card-container">
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="use-template-container">
        <p>Use Template</p>
      </div>
    </div>
  );
};

export default TemplateCard;
