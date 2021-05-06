import React from "react";
import { useHistory } from "react-router-dom";
import { URL_HOME, URL_WATCHLIST } from "./../../constant/URL_CONST";
import axios from "axios";
import { API_WATCHLIST } from "./../../constant/API_BACK";

const WatchListOff = () => {
  const history = useHistory();
  var id = localStorage.getItem("id");

  const test = {
    label: "watchlist" + id,
  };

  return (
    <div>
      <h1>Vous n'avez pas encore de watchlist, voulez vous en créer une</h1>
      <button
        onClick={() => {
          //   axios.post(API_WATCHLIST, body);

          var body = JSON.stringify(test);
          console.log(body);
          console.log(test);
          axios({
            method: "post",
            url: API_WATCHLIST + "/utilisateurs/" + id,
            data: test,
          })
            .then(function (reponse) {
              history.push(0);
              //On traite la suite une fois la réponse obtenue
              console.log(reponse);
            })
            .catch(function (erreur) {
              //On traite ici les erreurs éventuellement survenues
              console.log(erreur);
            });
            window.location.reload(true);
        }}
      >
        Oui
      </button>
      <button
        onClick={() => {
          history.push(URL_HOME);
        }}
      >
        Non
      </button>
    </div>
  );
};

export default WatchListOff;
