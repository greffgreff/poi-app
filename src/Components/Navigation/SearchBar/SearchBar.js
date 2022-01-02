import "./SearchBar.css";
import React from "react";

export default function SearchBar() {
  return (
    <div className="search-content-wrapper one-liner">
      <input type="text"/>
      <button>Search</button>
    </div>
  );
}