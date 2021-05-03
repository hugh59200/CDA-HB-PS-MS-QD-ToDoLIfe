import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_FILMS } from './../../../constant/URL_CONST';


function NewFilm() {

    const history=useHistory();
  return (

    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center">
    
      </div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film largeurnew">
          <div>
            <button className="btn btn-primary btn-enregistrer mt-3 mb-3" onClick={()=>{history.push(URL_FILMS)}}>Retour</button>
          </div>

        <form>
        <div className="form-group row justify-content-center">
    <input type="text" className="col-10 form-control" placeholder="Nom du film" id="nom"/>
  </div>

  <label className="text-white timer-actuel">Timer actuel : </label>
  <div className="justify-content-center row">
<div className="col-3 text-center marge-film text-white">Heures</div>
<div className="col-3 text-center marge-film text-white">Minutes</div>
<div className="col-3 text-center marge-film text-white">Secondes</div>

  </div>
  <div className="form-group row justify-content-center">
    <input type="number"  className=" marge-film form-control col-3" name="hour" min="0" max="5" defaultValue="0"/>
    <input type="number" className="marge-film form-control col-3"  name="minute" placeholder="Minute"  min="0" max="59"defaultValue="0"/>
    <input type="number" className=" marge-film form-control col-3"  name="seconde" placeholder="Seconde"  min="0" max="59"defaultValue="0"/>
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


export default NewFilm;
