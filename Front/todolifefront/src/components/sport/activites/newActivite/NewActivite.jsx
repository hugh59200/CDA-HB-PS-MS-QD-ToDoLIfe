import React from "react";
import Menu from "../../menu/MenuSport";

import "../../../../assets/css/sport/stats/new-stats-sport.css";
import SearchBar from "../../searchBar/SearchBarSport";
import FormActivite from "./FormActivite";

const NewActivite = () => {
  return (
    <>
      <Menu />
      {/* <h1 className="text-white text-center">Nouvelle Activité</h1> */}

      <div className="new-stats-sport-app">
        <SearchBar />

        <FormActivite />
      </div>
    </>
  );
};

export default NewActivite;
