import React from "react";
import { Link } from "react-router-dom";
import '../styles/BreadCrumbs.scss'

function BreadCrumbs() {
  return (
    <div className="breadcrumbs">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Delhi NCR</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Home Cleaning
          </li>
        </ol>
      </nav>
    </div>
    
  );
}

export default BreadCrumbs;
