import React from "react";
// import { useHistory } from "react-router";
import Menu from "../menu/MenuSport";

import "../../../assets/css/sport/stats/stats.css";
import { useHistory } from "react-router";
import {
  URL_SPORT_STATS_BADGES,
  URL_SPORT_STATS_GENERALES,
  URL_SPORT_STATS_SPORTIVES,
} from "../../../constant/URL_CONST";
import SportService from "../../../service/SportService";

const Stat = () => {
  const history = useHistory();

  const moveToStatsGen = () => {
    let id = JSON.parse(localStorage.getItem("stat")).idStatistiques;

    SportService.checkIfUserGetStatGen(id)
      .then((res) => {
        if (res.data === "") {
          create();
        } else {
          let stat = res.data;
          var data = JSON.stringify(stat);
          localStorage.setItem("stat_gen", data);
          history.push(URL_SPORT_STATS_GENERALES);
        }
      })
      .catch((err) => {});
  };

  const moveToStatsSpo = () => {
    history.push(URL_SPORT_STATS_SPORTIVES);
  };

  const moveToStatsBad = () => {
    history.push(URL_SPORT_STATS_BADGES);
  };

  const create = () => {
    // console.log("create");
    let data = JSON.parse(localStorage.getItem("stat"));
    let stat = {
      statistiques: data,
    };

    SportService.createStatGenForUser(stat).then((res) => {
      // console.log(res);
      // console.log(res.data);
      // let stat = res.data;
      console.log("stat", stat);
      var data = JSON.stringify(stat);
      localStorage.setItem("stat_gen", data);
    });
    moveToStatsGen();
  };

  return (
    <>
      <Menu />

      <div className="d-flex justify-content-around align-items-center justify-content-center stats-app">
        <div
          className="d-flex flex-column align-items-center justify-content-center stats-app-div"
          onClick={moveToStatsGen}
        >
          <div className="img-stats-G"></div>
          <h1 className="text-stats text-center">
            Statistiques
            <br />
            générales
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center stats-app-div"
          onClick={moveToStatsSpo}
        >
          <div className="img-stats-S"></div>
          <h1 className="text-stats text-center">
            Statistiques
            <br />
            sportives
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center stats-app-div"
          onClick={moveToStatsBad}
        >
          <div className="img-stats-B"></div>
          <h1 className="text-stats text-center">
            Mes
            <br />
            badges
          </h1>
        </div>
      </div>
    </>
  );
};

export default Stat;
