import React from "react";
import Menu from "../menu/MenuSport";

import "../../../assets/css/sport/activites/activites.css";
import { useHistory } from "react-router";
import {
  URL_SPORT_ACTVITES_ME,
  URL_SPORT_ACTVITES_NEW,
} from "../../../constant/URL_CONST";

const Activite = () => {
    
  const history = useHistory();

  const moveToActiviteMyAct = () => {
    history.push(URL_SPORT_ACTVITES_ME);
  };

  const moveToActiviteNewAct = () => {
    history.push(URL_SPORT_ACTVITES_NEW);
  };

  return (
    <>
      <Menu />

      <div className="d-flex justify-content-around align-items-center justify-content-center acts-app">
        <div
          className="d-flex flex-column align-items-center justify-content-center acts-app-div"
          onClick={moveToActiviteMyAct}
        >
          <div className="img-act-cons"></div>
          <h1 className="text-acts text-center">
            Mes
            <br />
            activités
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center acts-app-div"
          onClick={moveToActiviteNewAct}
        >
          <div className="img-act-ajout declage2"></div>
          <h1 className="text-acts text-center">
            Nouvelle
            <br />
            activité
          </h1>
        </div>
      </div>
    </>
  );
};

export default Activite;
