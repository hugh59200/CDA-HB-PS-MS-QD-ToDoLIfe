import React from "react";
import Menu from "../../../menu/MenuSport";

import "../../../../../assets/css/sport/stats/new-stats-sport.css";
import SearchBar from "../../../searchBar/SearchBarSport";
import FormStatSport from "./FormStatSport";
const CreationStatsSport = () => {
  // const sport = localStorage.getItem("sport");

  return (
    <>
      <Menu />
      {/* <div className="new-stats-sport-app">
        <SearchBar />
        
      </div> */}
      <div className="new-stats-sport-app">
        <SearchBar />

        <FormStatSport />
      </div>
    </>
  );
};

export default CreationStatsSport;
