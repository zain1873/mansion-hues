import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

// Simple breadcrumb bar: "HOME / [current]".
// The Home link points to "/" and the current page label is shown on the right.
function Breadcrumb({ current }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumb-home">
        Home
      </Link>
      <span className="breadcrumb-separator" aria-hidden="true">
        /
      </span>
      <span className="breadcrumb-current">{current}</span>
    </nav>
  );
}

export default Breadcrumb;
