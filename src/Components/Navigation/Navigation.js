import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="nav-content-wrapper">
        <div className="one-liner menu">
          <div className="logo">
            <a>LOGO</a>
          </div>
          
          <div className="links">
            <a className="current">link 1</a>
            <a>link 2</a>
            <a>link 3</a>
            <a>link 4</a>
          </div>
        </div>
        
        <SearchBar />
      </div>
    </nav>
  );
}
