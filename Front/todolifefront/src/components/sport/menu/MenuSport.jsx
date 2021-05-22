import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "../../../assets/css/sport/menu/menu.css";
import { URL_SPORT_ACTVITES, URL_SPORT_DEFI, URL_SPORT_STATS } from "../../../constant/URL_CONST";

const MenuSport = () => {
    
    const [path, setPath] = useState("")
    
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
    
    useEffect(() => {
        // console.log(history.location.pathname)
        setPath(history.location.pathname)
        // console.log("path",path)
    }, [history.location.pathname, path])
    
  return (
      
      
    <>
      <div className="d-flex justify-content-around menu-app">
        <div 
        className="d-flex flex-column align-items-center justify-content-center menu-app-div"
        onClick={moveToStats}>
          <h1 className="">Statistiques</h1>
        </div>
        <div 
        className="d-flex flex-column align-items-center justify-content-center menu-app-div"
        onClick={movetoActivs}>
          <h1 className="">Activités</h1>
        </div>
        <div 
        className="d-flex flex-column align-items-center justify-content-center menu-app-div"
        onClick={movetoDefis}>
          <h1 className="">Defis</h1>
        </div>
      </div>
    </>
  );
};

export default MenuSport;
