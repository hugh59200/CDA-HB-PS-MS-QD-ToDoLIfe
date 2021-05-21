import { Redirect, useHistory } from "react-router";
import { confirmed, isConfirmed } from "../../service/authentificationService";
import { URL_CONNEXION } from "../../constant/URL_CONST";

import "../assets/css/attente/validation.css";

import React from "react";
import UtilisateurService from "../../service/UtilisateurService";
import { toast } from "react-toastify";

const AttenteValidation = () => {
  const history = useHistory();

  const click = () => {
    let userName = localStorage.getItem("username");
    UtilisateurService.checkIfRegistered(userName).then((res) => {
      let code = res.status;

      if (code === 200) {
        toast.success("register successful");
        confirmed();

        history.push(URL_CONNEXION);
        // console.log("ok")
      } else {
        toast.error("check your mail to confirm your account");
      }
    });
  };
  
  return (
    <>
      {isConfirmed() ? (
        <Redirect to={URL_CONNEXION} />
      ) : (
        <>
        <div className="d-flex justify-content-around align-items-center justify-content-center">
          <div className="d-flex">
            <div className="box d-flex">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <h1 className="waiting-animation">Waiting </h1>
                <p className="text-content">
                  <br />
                  you are {isConfirmed() ? "confirmed" : "unconfirmed"}
                  <br />
                  please check into your mail,
                  <br />a link has been sent to finalise your sign up
                </p>
              </div>
            </div>
          <div onClick={click} className="btn-done">
            <p class="text-btn-done">I'm done</p>
          </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default AttenteValidation;
