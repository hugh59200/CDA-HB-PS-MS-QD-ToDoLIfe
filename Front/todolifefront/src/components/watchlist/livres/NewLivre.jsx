import React from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_LIVRES } from "./../../../constant/URL_CONST";
import axios from "axios";
import { API_LIVRES } from "./../../../constant/API_BACK";

function NewLivre() {
  const history = useHistory();

  var nomLivre = "";
  var pageAct = "";
  var monAvis = "";
  var idUtilisateur = localStorage.getItem("id");

  return (
    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center"></div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film">
          <div>
            <button
              className="btn btn-primary btn-enregistrer mt-3 mb-3"
              onClick={() => {
                history.push(URL_LIVRES);
              }}
            >
              Retour
            </button>
          </div>

          <form>
            <div className="form-group row justify-content-center d-block">
              <label className="text-white timer-actuel">
                Titre du livre :{" "}
              </label>

              <input
                type="text"
                className="col-10 form-control mb-1 m-auto"
                placeholder="Nom du livre"
                id="nom"
                onChange={(e) => {
                  nomLivre = e.target.value;
                }}
              />
            </div>

            <label className="text-white timer-actuel">Page actuelle : </label>
            <div className="justify-content-center row d-block mb-3">
              <input
                type="number"
                className="col-10 form-control mb-3 m-auto"
                placeholder="Page actuelle"
                onChange={(e) => {
                  pageAct = e.target.value;
                }}
              />
            </div>

            <div className="form-group row justify-content-center d-block">
              <label className="text-white timer-actuel">Mon avis : </label>

              <textarea
                type="textarea"
                className="form-control col-10 text-zone m-auto"
                placeholder="Mon avis"
                rows="3"
                onChange={(e) => {
                  monAvis = e.target.value;
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-enregistrer"
              onClick={() => {
                const res = {
                  title: nomLivre,
                  pageActuel: pageAct,
                  avis: monAvis,
                };

                axios({
                  method: "post",
                  url: API_LIVRES + "/utilisateurs/" + idUtilisateur,
                  data: res,
                })
                  .then(function (reponse) {
                    console.log(res);
                    //On traite la suite une fois la réponse obtenue
                    console.log(reponse);
                  })
                  .catch(function (erreur) {
                    //On traite ici les erreurs éventuellement survenues
                    console.log(erreur);
                  });
                history.push(URL_LIVRES);
                window.location.reload();
              }}
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLivre;
