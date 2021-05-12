import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_NEW_SERIE, URL_FILMS, URL_LIVRES } from './../../../constant/URL_CONST';
import ListeSeries from "./ListeSeries";
import "../../../assets/css/watchlist/film.css"


function Series() {
  const history = useHistory();
  return (

    <div className="container-fluid largeur">
      <div className="row justify-content-center largeur-titre">
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test"onClick={() => { history.push(URL_FILMS) }}>FILMS</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test2">SERIES</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test" onClick={() => { history.push(URL_LIVRES) }}>LIVRES</button>
      </div>

      <div className="row justify-content-center ">
        <div className="col-12 col-md-6 col-lg-6 bloc-film">
          <div>
            <button className="btn btn-success mt-2 mb-2 text-center" onClick={() => { history.push(URL_NEW_SERIE) }}  >Ajouter</button>
          </div>

      
          <ListeSeries />

        </div>
      </div>
    </div>
  );
};


export default Series;

