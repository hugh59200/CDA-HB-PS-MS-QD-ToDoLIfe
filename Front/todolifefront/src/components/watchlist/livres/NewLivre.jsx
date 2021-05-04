import React, {useState} from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_LIVRES } from "./../../../constant/URL_CONST";

function NewLivre() {
  const history = useHistory();

 let nomLivre = "";
 let  pageAct = ""; 
 let monAvis = "";


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
            <div className="form-group row justify-content-center">
              <label className="text-white timer-actuel">
                Titre du livre :{" "}
              </label>

              <input
                type="text"
                className="col-10 form-control mb-1"
                placeholder="Nom du livre"
                id="nom"
                onChange={e =>{

                  nomLivre = e.target.value
                  console.log(nomLivre)

                }}
              />
            </div>

            <label className="text-white timer-actuel">Page actuelle : </label>
            <div className="justify-content-center row">
              <input
                type="number"
                className="col-10 form-control mb-3"
                placeholder="Page actuelle"

                onChange={e =>{
pageAct = e.target.value
console.log(pageAct)

                }}

              />
            </div>

            <div className="form-group row justify-content-center">
              <label className="text-white timer-actuel">Mon avis : </label>

              <textarea
                type="textarea"
                className="form-control col-10 text-zone"
                placeholder="Mon avis"
                rows="3"
                onChange={e =>{
                  monAvis = e.target.value
                  console.log(monAvis)
                   }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-enregistrer">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLivre;
