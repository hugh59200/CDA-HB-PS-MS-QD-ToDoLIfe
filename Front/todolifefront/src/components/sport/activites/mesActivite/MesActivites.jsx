import React from "react";

import "../../../../assets/css/sport/stats/stats_spor.css";
import Menu from "../../menu/MenuSport";
import ListActivite from "../list/ListActivite";

const MesActivites = () => {
  return (
    <>
      <Menu />
      <div className="stat-spor-app">
        <h1 className="text-white text-white">Mes Activités</h1>
        <div className="infos-stats-spor d-flex flex-column justify-content-center align-items-center">
          <ListActivite />
        </div>
      </div>
    </>
  );
};

export default MesActivites;
