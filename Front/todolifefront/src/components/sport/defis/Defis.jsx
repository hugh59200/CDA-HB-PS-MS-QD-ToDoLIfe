import React from "react";
import Menu from "../menu/MenuSport";

import "../../../assets/css/sport/defis/defis.css";
import { useHistory } from "react-router";
import { URL_SPORT_DEFI_ME, URL_SPORT_DEFI_NEW, URL_SPORT_DEFI_NEW_PROP } from "../../../constant/URL_CONST";

const Defis = () => {
  
  const history = useHistory();

  const moveToDefisMyDef = () => {
    history.push(URL_SPORT_DEFI_ME);
  };
  
  const moveToDefisNewDef = () => {
    history.push(URL_SPORT_DEFI_NEW);
  };
  
  const moveToDefisPropDef = () => {
    history.push(URL_SPORT_DEFI_NEW_PROP);
  };
  
  
  return (
    <>
      <Menu />

      <div className="d-flex justify-content-around align-items-center justify-content-center defis-app">
        <div
          className="d-flex flex-column align-items-center justify-content-center defis-app-div"
          onClick={moveToDefisMyDef}
        >
          <div className="img-defis-M"></div>
          <h1 className="text-defis text-center">
          Mes 
          <br />
          défis
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center defis-app-div"
          onClick={moveToDefisNewDef}
        >
          <div className="img-defis-A"></div>
          <h1 className="text-defis text-center decalage1">
          nouveau 
          <br />
          defi
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center defis-app-div"
          onClick={moveToDefisPropDef}
        >
          <div className="img-defis-P"></div>
          <h1 className="text-defis text-center">
            Propostion
            <br />
            de défi
          </h1>
        </div>
      </div>
    </>
  );
};

export default Defis;
