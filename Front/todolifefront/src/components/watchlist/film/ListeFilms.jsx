
/* eslint-disable no-lone-blocks */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { URL_MODIF_FILM } from "./../../../constant/URL_CONST";
import { API_FILMS } from './../../../constant/API_BACK';

const ListeFilms = () => {
  var idUtilisateur = localStorage.getItem("id");
  const history = useHistory();
  const [ListeFilm, setListeFilm] = useState([]);

  useEffect(() => {
    axios
      .get(API_FILMS + "/utilisateurs/" + idUtilisateur)
      .then(function (response) {
        if (response.status === 200) {
            setListeFilm(response.data);
            ListeFilm.map((Film, i) => {
            console.log(Film);
          });

          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
    
      <div className="row w-100 m-auto justify-content-around">
        {ListeFilm.map((films, i) => (
          <>
            <div className="ajout-film row mb-1">
              <div
                className="titre-film col-8 col-md-10 col-lg-10"
                onClick={() => {
                  let filmEnQuestion = {
                    avis: films.avis,
                    idFilm: films.idFilm,
                    moment: films.moment,
                    name: films.name,
                  };

                  history.push({
                    pathname: URL_MODIF_FILM,
                    filmEnQuestion: filmEnQuestion,
                  });
                }}
              >
                <span className="text-white">{films.name}</span>
              </div>   
              <div className="icone-suppr-edit col-4 col-lg-2 col-md-2">
                <button
                  className="boutton-supprimer"
                  onClick={() => {
                    axios({
                      method: "delete",
                      url: API_FILMS + "/" + films.idFilm,
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
export default ListeFilms;
