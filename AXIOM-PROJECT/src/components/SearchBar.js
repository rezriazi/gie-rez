import React from "react";
import "./searchBar.css";
import Filter from "./Filter.js";

const SearchBar = ({ handleChange, up, handleFilter }) => {
  return (
    <div className={`sb-container center-align row ${up ? "up" : "centric"}`}>
      {!up && <h1>GITHUB ISSUE EXPLORER</h1>}
      <div className="searchBar col s12 l6 m10 offset-l3 offset-m1">
        <div className="input-field searchInput">
          {/*didnt have searchinput */}
          <i className="material-icons prefix">search</i>
          <input
            id="searchInput"
            type="text"
            onChange={handleChange}
            placeholder="PASTE A GITHUB REPO URL"
          />
        </div>
        {up && <Filter handleChange={handleFilter} />}
      </div>
    </div>
  );
};

export default SearchBar;
