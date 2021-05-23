import React from "react";
import Menu from "../../menu/MenuSport";
import "../../../../assets/css/sport/stats/stats_gen.css";
import Imc from "./imc/Imc";

const StatsGen = () => {
  return (
    <>
      <Menu />
      <div className="stats-gen-app">
        <h1 className="text-white text-center">Statistiques Générales</h1>
        <Imc />
      </div>
    </>
  );
};

export default StatsGen;
