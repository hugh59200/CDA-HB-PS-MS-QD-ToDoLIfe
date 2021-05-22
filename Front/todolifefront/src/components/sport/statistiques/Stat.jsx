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
    // console.log("user",localStorage.getItem("user"))
    // console.log("stat", localStorage.getItem("stat"));
    // console.log("stat_gen", localStorage.getItem("stat_gen"));
    // if (
    //   localStorage.getItem("user") !== null &&
    //   localStorage.getItem("stat") !== null &&
    //   localStorage.getItem("stat_gen") !== null
    // ) {
    //   history.push(URL_SPORT_STATS_GENERALES);
    // } else {
    //   CheckOrCreateStatsGen();
    // }
  };

  const moveToStatsSpo = () => {
    history.push(URL_SPORT_STATS_SPORTIVES);
  };

  const moveToStatsBad = () => {
    history.push(URL_SPORT_STATS_BADGES);
  };

  const CheckOrCreateStatsGen = () => {
    let data = JSON.parse(localStorage.getItem("stat"));

    let test = {
      statistiques: data,
    };
    let id = test.statistiques.idStatistiques;

    console.log("id", id);

    SportService.checkIfUserGetStatGen(id)
      .then((res) => {
        console.log("data", res.data);

        if (
          localStorage.getItem("user") !== null &&
          localStorage.getItem("stat") !== null &&
          localStorage.getItem("stat_gen") === null
        ) {
          let statG = res.data;
          console.log("statG", statG);
          var data = JSON.stringify(statG);
          localStorage.setItem("stat_gen", data);

          if (
            localStorage.getItem("user") !== null &&
            localStorage.getItem("stat") !== null &&
            localStorage.getItem("stat_gen") !== null
          ) {
            history.push(URL_SPORT_STATS_GENERALES);
          } else {
            create();
          }
        }
      })
      .catch((err) => {});
  };

  const create = () => {
    // console.log("create");

    let data = JSON.parse(localStorage.getItem("stat"));

    // console.log("data",data)

    let test = {
      statistiques: data,
    };

    console.log("stat_gen", test);

    SportService.createStatGenForUser(test)
      .then((res) => {
        let statG = res.data;
        console.log("statG", statG);
        var data = JSON.stringify(statG);
        localStorage.setItem("stat_gen", data);

        moveToStatsGen();
      })
      .catch((err) => {});
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

// if (
//   localStorage.getItem("user") !== null &&
//   localStorage.getItem("stat") !== null &&
//   localStorage.getItem("stat_gen") === null
// ) {
//   let statG = res.data;
//   console.log("statG", statG);
//   var data = JSON.stringify(statG);
//   localStorage.setItem("stat_gen", data);

//   if (
//     localStorage.getItem("user") !== null &&
//     localStorage.getItem("stat") !== null &&
//     localStorage.getItem("stat_gen") !== null
//   ) {
//     // history.push(URL_SPORT_STATS_GENERALES);
//   } else {
//     // createStatGenForUser ()
//   }
// }

// if (localStorage.getItem("stat_gen") === "") {
//   console.log("NOK");
// createStatGenForUser();
// } else {
//   // history.push(URL_SPORT_STATS_GENERALES);
// }
// else {
//   history.push(URL_SPORT_STATS_GENERALES);
// }
