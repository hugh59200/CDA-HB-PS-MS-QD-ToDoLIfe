import React from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import {
  URL_NEW_LIVRE,
  URL_SERIES,
  URL_FILMS,
} from "./../../../constant/URL_CONST";
import ListeLivres from "./ListeLivres";

function Livres() {
  const history = useHistory();


  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <button
          className="m-2 col-2 col-md-2 col-lg-2 btn btn-test"
          onClick={() => {
            history.push(URL_FILMS);
          }}
        >
          FILMS
        </button>
        <button
          className="m-2 col-2 col-md-2 col-lg-2 btn btn-test"
          onClick={() => {
            history.push(URL_SERIES);
          }}
        >
          SERIES
        </button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test2">
          LIVRES
        </button>
      </div>

      <div className="row justify-content-center m-auto">
        <div className="col-12 col-md-6 col-lg-6 m-auto bloc-film">
          <div>
            <button
              className="btn btn-success mt-2 mb-2 text-center"
              onClick={() => {
                history.push(URL_NEW_LIVRE);
              }}
            >
              Ajouter
            </button>
          </div>

          <ListeLivres />
          {/*  emplacement liste  */}
        </div>
      </div>
    </div>
  );
}

export default Livres;
