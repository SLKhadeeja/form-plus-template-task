import React from 'react';
import Header from './components/header';
import Pagination from './components/pagination';
import TemplateCard from './components/templateCard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content-top">
          <p className="title">All Templates</p>
          <p className="template-quantity">2000 templates</p>
        </div>
        <div className="template-cards-wrapper">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default App;
