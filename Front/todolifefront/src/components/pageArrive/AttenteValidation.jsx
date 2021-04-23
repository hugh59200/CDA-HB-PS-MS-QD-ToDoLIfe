import { Redirect, useHistory } from "react-router";
import { confirmed, isConfirmed } from "../../service/authentificationService";

import "../../assets/css/attente/validation.css";
// const TEST = toast.warning("check your mail to verify your account");

import React from "react";
import UtilisateurService from "../../service/UtilisateurService";
import { toast } from "react-toastify";
import { URL_CONNEXION } from "../../constant/URL_CONST";

const AttenteValidation = () => {
  const history = useHistory();

  const click = () => {
    let userName = localStorage.getItem("username");
    UtilisateurService.checkIfRegistered(userName).then((res) => {
      let code = res.status;
      // console.log(code)

      if (code === 200) {
        // console.log(isConfirmed())
        confirmed();
        localStorage.removeItem("username");
        history.push(URL_CONNEXION);
        // console.log("ok")
        toast.success("register successful");
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
          <div className="container">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <h1 className="waiting-animation">Waiting </h1>
                {/* <TypedWaiting /> */}
                <p className="text-content">
                  <br />
                  you are {isConfirmed() ? "confirmed" : "unconfirmed"}
                  <br />
                  please check into your mail,
                  <br />a link has been sent to finalise your sign up
                </p>
              </div>
            </div>
          </div>
          {/* <div className="div-btn-done"> */}
          <button onClick={click} className="btn-done text-center">
            I'm done
          </button>
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default AttenteValidation;
