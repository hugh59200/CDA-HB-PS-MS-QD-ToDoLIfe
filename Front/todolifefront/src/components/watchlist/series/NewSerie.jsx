import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_SERIES } from './../../../constant/URL_CONST';


function NewSerie() {

    const history=useHistory();
  return (

    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center">

      </div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film largeurnew">
          <div>
            <button className="btn btn-primary btn-enregistrer mt-3 mb-3" onClick={()=>{history.push(URL_SERIES)}}>Retour</button>
          </div>

        <form>
        <div className="form-group row justify-content-center ">
    <input type="text" className="col-10 form-control" placeholder="Nom de la serie" id="nom"/>
  </div>

  <div className="justify-content-center row">
  <div className="col-5 text-center marge-film text-white">Saison :</div>
<div className="col-5 text-center marge-film text-white">Episode :</div>


  </div>
  <div className="form-group row justify-content-center">
    <input type="number" className=" marge-serie form-control col-4"  name="saison" placeholder="Saison"  min="0" max="59"defaultValue="0"/>
    <input type="number" className="marge-serie form-control col-4"  name="episode" placeholder="Episode"  min="0" max="500"defaultValue="0"/>

      </div>

      <label className="text-white timer-actuel">Mon avis : </label>

  <div className="form-group row justify-content-center">
    <textarea type="textarea"  className="form-control col-10 text-zone" name="textarea" rows="3" />

      </div>
      <button type="submit" className="btn btn-primary btn-enregistrer">Enregistrer</button>
        </form>

        </div>




      </div>




    </div>





  );
};


export default NewSerie;
