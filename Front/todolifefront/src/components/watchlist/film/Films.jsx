import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_NEW_FILM, URL_LIVRES, URL_SERIES } from './../../../constant/URL_CONST';
import ListeFilms from "./ListeFilms";
import "../../../assets/css/watchlist/film.css"


function Films() {
  const history = useHistory();
  return (

    <div className="container-fluid largeur">
      <div className="row justify-content-center largeur-titre">
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test2">FILMS</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test" onClick={() => { history.push(URL_SERIES) }}>SERIES</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test" onClick={() => { history.push(URL_LIVRES) }}>LIVRES</button>
      </div>

      <div className="row justify-content-center ">
        <div className="col-12 col-md-6 col-lg-6 bloc-film">
          <div>
            <button className="btn btn-success mt-2 mb-2 text-center" onClick={() => { history.push(URL_NEW_FILM) }}  >Ajouter</button>
          </div>

      
          <ListeFilms />

        </div>
      </div>
    </div>
  );
};


export default Films;

