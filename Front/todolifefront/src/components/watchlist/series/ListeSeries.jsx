
/* eslint-disable no-lone-blocks */

import "../../../assets/css/watchlist/film.css";

import { useEffect, useState } from "react";

import {API_SERIES} from './../../../constant/API_BACK';
import React from "react";
import { URL_MODIF_SERIE } from "./../../../constant/URL_CONST";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ListeSeries = () => {
  var idUtilisateur = localStorage.getItem("id");
  const history = useHistory();
  const [ListeSerie, setListeSerie] = useState([]);

  useEffect(() => {
    axios
      .get(API_SERIES + "/utilisateurs/" + idUtilisateur)
      .then(function (response) {
        if (response.status === 200) {
            setListeSerie(response.data);
            // eslint-disable-next-line array-callback-return
            ListeSerie.map((Serie, i) => {
            console.log(Serie);
          });

          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ListeSerie, idUtilisateur]);

  return (
    <>
    
      <div className="row w-100 m-auto justify-content-around">
        {ListeSerie.map((series, i) => (
          <>
            <div className="ajout-film row mb-1">
              <div
                className="titre-film col-8 col-md-10 col-lg-10"
                onClick={() => {
                    let serieEnQuestion = {
                      avis: series.avis,
                      idSerie: series.idSerie,
                      saison: series.saison,
                      episode: series.episode,
                      name: series.name,
                    };
                
                    history.push({
                      pathname: URL_MODIF_SERIE,
                      serieEnQuestion: serieEnQuestion,
                    });
                  }}
              >
                <span className="text-white">{series.name}</span>
              </div>   
              <div className="icone-suppr-edit col-4 col-lg-2 col-md-2">
                <button
                  className="boutton-supprimer"
                  onClick={() => {
                    axios({
                      method: "delete",
                      url: API_SERIES + "/" + series.idSerie,
                    })
                      .then(function (reponse) {
                        //On traite la suite une fois la réponse obtenue
                        console.log(reponse);
                      })
                      .catch(function (erreur) {
                        //On traite ici les erreurs éventuellement survenues
                        console.log(erreur);
                      });
                    window.location.reload();
                  }}
                ></button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default ListeSeries;


