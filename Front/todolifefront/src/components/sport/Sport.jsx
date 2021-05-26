import React from "react";
import { useHistory } from "react-router";

import "../../assets/css/sport/sport.css";
import {
  URL_SPORT_ACTVITES,
  URL_SPORT_DEFI,
  URL_SPORT_STATS_GENERALES,
  // URL_SPORT_STATS,
} from "../../constant/URL_CONST";
import SportService from "../../service/SportService";
import UtilisateurService from "../../service/UtilisateurService";

const Sport = () => {
  const history = useHistory();

  const id = localStorage.getItem("id");

  // let stats_user;

  const moveToStats = () => {
    createStat();
  };

  const movetoActivs = () => {
    history.push(URL_SPORT_ACTVITES);
  };

  const movetoDefis = () => {
    history.push(URL_SPORT_DEFI);
  };

  const createStat = () => {
    UtilisateurService.getById(id).then((res) => {
      // console.log("res", res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      let data_user = {
        utilisateur: JSON.parse(localStorage.getItem("user")),
      };

      SportService.createStatForUser(data_user).then((res) => {
        // localStorage.setItem("stat", JSON.stringify(res.data));

        SportService.checkIfUserGetStat(id).then((response) => {
          // console.log(res);
          // console.log("res", response.data);
          localStorage.setItem("stat", JSON.stringify(response.data));

          createStatGen();
        });
      });
    });
  };

  const createStatGen = () => {
    let data_stat = {
      statistiques: JSON.parse(localStorage.getItem("stat")),
    };

    SportService.createStatGenForUser(data_stat).then((res) => {
      console.log("res", res.data);

      SportService.checkIfUserGetStatGen(
        JSON.parse(localStorage.getItem("stat")).idStatistiques
      ).then((response) => {
        console.log("res", response.data);
        localStorage.setItem("stat_gen", JSON.stringify(response.data));

        history.push(URL_SPORT_STATS_GENERALES);
      });
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
