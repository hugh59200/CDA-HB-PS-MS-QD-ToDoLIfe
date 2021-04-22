import { Redirect, useHistory } from "react-router";
import { confirmed, isConfirmed } from "../service/authentificationService";
import { URL_ATTENTE, URL_CONNEXION } from "../constant/URL_CONST";

import "../assets/css/attente/validation.css";
// const TEST = toast.warning("check your mail to verify your account");

import React, { useState } from "react";
import UtilisateurService from "../service/UtilisateurService";
import { toast } from "react-toastify";

const AttenteValidation = () => {
    
    const history = useHistory();

  const click = () => {

    let userName = localStorage.getItem("username")
      UtilisateurService.checkIfRegistered(userName).then((res) => {
          let code = res.status
          // console.log(code)
          
          if (code === 200){
            // console.log(isConfirmed())
            localStorage.removeItem("username")
            history.push(URL_CONNEXION)
            // console.log("ok")
            toast.success("register successful")
          } else {
            toast.error("check your mail to confirm your account")
          }
      })
  }

  // useEffect(() => {

  //     console.log(isConfirmed())
  //     setCheck(isConfirmed()
  //
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

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
                <p className="text-content">
                  
                  <br/>
                  
                you are {isConfirmed() ? "confirmed" : "unconfirmed"}
                <br/>
                please check into your mail, 
                <br/>
                a link has been sent to finalise your sign up
                </p>
              </div>
            </div>
          </div>
          <button onClick={click} className="btn-done"> I'm done </button>
        </>
      )}
    </>
  );
};

export default AttenteValidation;
