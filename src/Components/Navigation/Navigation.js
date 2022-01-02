import React from "react";
import SearchBar from "./Components/Navigation/SearchBar/SearchBar";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="nav-items">
        <div>LOGO</div>
        <a className="current">link 1</a>
        <a>link 2</a>
        <a>link 3</a>
        <a>link 4</a>
      </div>
    </nav>
  );
}
