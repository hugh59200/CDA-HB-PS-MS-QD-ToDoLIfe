import React from "react";
import { useHistory } from "react-router";

import "../../assets/css/sport/sport.css";
import {
  URL_SPORT_ACTVITES,
  URL_SPORT_DEFI,
  URL_SPORT_STATS,
} from "../../constant/URL_CONST";
import SportService from "../../service/SportService";

const Sport = () => {
  const history = useHistory();

  const id = localStorage.getItem("id");

  const moveToStats = () => {
    // console.log("user", localStorage.getItem("user"));
    // console.log("stat", localStorage.getItem("stat"));
    if (
      localStorage.getItem("user") !== null &&
      localStorage.getItem("stat") !== null
    ) {
      history.push(URL_SPORT_STATS);
    } else {
      CheckOrCreateStats();
    }
  };

  const movetoActivs = () => {
    history.push(URL_SPORT_ACTVITES);
  };

  const movetoDefis = () => {
    history.push(URL_SPORT_DEFI);
  };

  const CheckOrCreateStats = () => {
    SportService.checkIfUserGetStat(id)
      .then((res) => {
        if (
          localStorage.getItem("user") !== null &&
          localStorage.getItem("stat") === null
        ) {
          let stat = res.data;
          console.log("stat", stat);
          var data = JSON.stringify(stat);
          localStorage.setItem("stat", data);

          if (
            localStorage.getItem("user") !== null &&
            localStorage.getItem("stat") !== null
          ) {
            history.push(URL_SPORT_STATS);
          } else {
            createStatForUser();
          }
        }
      })
      .catch((err) => {});
  };

  const createStatForUser = () => {
    let data = JSON.parse(localStorage.getItem("user"));

    let test = {
      utilisateur: data,
    };

    SportService.createStatForUser(test).then((res) => {
      let stat = res.data;
      console.log("stat", stat);
      var data = JSON.stringify(stat);
      localStorage.setItem("stat", data);

      moveToStats();
    });
  };

  return (
    <>
      <div className="d-flex justify-content-around align-items-center justify-content-center sport-app">
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={moveToStats}
        >
          <div className="img-stats"></div>
          <h1 className="text-sport">Statistiques</h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={movetoActivs}
        >
          <div className="img-activs"></div>
          <h1 className="text-sport">Activités</h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={movetoDefis}
        >
          <div className="img-defis"></div>
          <h1 className="text-sport">Défis</h1>
        </div>
      </div>
    </>
  );
};

export default Sport;
