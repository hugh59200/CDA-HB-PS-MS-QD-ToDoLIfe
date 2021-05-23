import React from "react";
import Search from "./Search";

import "../../../assets/css/sport/searchBar/search_bar.css";

const SearchBarSport = () => {
  return (
    <>
      <label htmlFor="" className="text-white text-center">
        <h1 id="form-title-sportive" className="show-search-bar-sport">
          Sport :
        </h1>
        <br />
        <Search />
      </label>
    </>
  );
};

export default SearchBarSport;
