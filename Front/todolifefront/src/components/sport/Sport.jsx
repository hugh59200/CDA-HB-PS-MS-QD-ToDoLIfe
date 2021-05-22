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
    
    
    SportService.checkIfUserGetStat(id)
    .then((res) => {
      // console.log("stat",res.data)

      // 3 check if user stat is empty
      if (res.data === "") {
        // console.log("user stat is empty");
        create();
      } else {
        let stat = res.data;
        // console.log("stat", stat);
        var data = JSON.stringify(stat);
        localStorage.setItem("stat", data);
        // console.log("user stat is not empty");
        history.push(URL_SPORT_STATS);
      }
    })
    .catch((err) => {});

  };

  const movetoActivs = () => {
    history.push(URL_SPORT_ACTVITES);
  };

  const movetoDefis = () => {
    history.push(URL_SPORT_DEFI);
  };

  const create = () => {
    console.log("create");

    let data = JSON.parse(localStorage.getItem("user"));

    let stat = {
      utilisateur: data,
    };

    SportService.createStatForUser(stat).then((res) => {
      console.log(res);
      console.log(res.data);

      let stat = res.data;
      console.log("stat", stat);
      var data = JSON.stringify(stat);
      localStorage.setItem("stat", data);
    });

    moveToStats();
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
