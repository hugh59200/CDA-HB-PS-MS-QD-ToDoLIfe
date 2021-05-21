import React from "react";

import "../../assets/css/sport/sport.css";
// import TypedLoader from "../typed/TypedLoader";

const Sport = () => {
  const movetoStats = () => {
    console.log("click stats");
  };

  const movetoActivs = () => {
    console.log("click activs");
  };

  const movetoDefis = () => {
    console.log("click defis");
  };

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
          onClick={movetoStats}
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
