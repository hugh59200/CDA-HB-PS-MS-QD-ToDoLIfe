import React from "react";
import Menu from "../../menu/MenuSport";
import ListStatsSportives from "./list/ListStatsSportives";

import "../../../../assets/css/sport/stats/stats_spor.css";

const StatsSpor = () => {
  return (
    <>
      <Menu />

      <div className="stat-spor-app">
        <h1 className="text-white text-center">Mes Statistiques Sportives</h1>
        <div className="infos-stats-spor d-flex flex-row justify-content-center align-items-center">
          <ListStatsSportives />
        </div>
      </div>
    </>
  );
};

export default StatsSpor;
