import React from "react";
import { useHistory } from "react-router";

import "../../assets/css/sport/sport.css";
import { URL_SPORT_ACTVITES, URL_SPORT_DEFI, URL_SPORT_STATS } from "../../constant/URL_CONST";
// import TypedLoader from "../typed/TypedLoader";

const Sport = () => {
  
  const history = useHistory();
  
  const moveToStats = () => {
    history.push(URL_SPORT_STATS);
  }
  
  const movetoActivs = () => {
      history.push(URL_SPORT_ACTVITES);
  }
  
  const movetoDefis = () => {
      history.push(URL_SPORT_DEFI);
  }

  return (
    <>
      {/* <div className="container d-flex h-100">
        <div className="row homeMgTopTxt text-center">
          <h1 className=" text-uppercase text-white text-center ">
          <TypedLoader/>
          </h1>
        </div>
      </div> */}

      <div className="d-flex justify-content-around align-items-center justify-content-center sport-app">
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={moveToStats}
        >
          <div className="img-stats"></div>
          <h1 className=" text-white">Statistiques</h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={movetoActivs}
        >
          <div className="img-activs"></div>
          <h1 className=" text-white">Activités</h1>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center sport-app-div"
          onClick={movetoDefis}
        >
          <div className="img-defis"></div>
          <h1 className="text-white">Defis</h1>
        </div>
      </div>
    </>
  );
};

export default Sport;
