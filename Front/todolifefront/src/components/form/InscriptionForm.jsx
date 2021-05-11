import "../../assets/css/form/FormStyle.css";

import React, { useEffect, useState } from "react";
import { URL_ATTENTE, URL_HOME } from "../../constant/URL_CONST.js";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { API_USER } from "../../constant/API_BACK.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
import {
  unConfirmed,
} from "../../service/authentificationService.js";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

const yup = require("yup");
require("yup-password");

const SignupSchema = yup.object().shape({
  nom: yup
    .string()
    .required("champ obligatoire")
    .min(2, "Trop court!")
    .max(20, "Trop long!"),

  prenom: yup
    .string()
    .required("champ obligatoire")
    .min(2, "Trop court!")
    .max(20, "Trop long!"),

  email: yup.string().email().required("champ obligatoire"),

  username: yup
    .string()
    .required("champ obligatoire")
    .min(2, "Trop court!")
    .max(20, "Trop long!"),

  dateNaissance: yup
    .date()
    .required("champ obligatoire")
    .typeError("Date invalide")
    .max(new Date(), "date future interdit"),

  password: yup
    .string()
    .required("champ obligatoire")
    .minUppercase(1, "1 majuscule minimum")
    .minNumbers(1, "1 chiffre minimum")
    .min(6, "6 caractères minimum."),
});

function InscriptionForm() {
  const history = useHistory();

  const [iconePwd, setIconePwd] = useState("");

  const showOrHidePassword = () => {
    if (document.querySelector(".show-pwd").type === "password") {
      document.querySelector(".show-pwd").type = "text";
    } else {
      document.querySelector(".show-pwd").type = "password";
    }
    setIcone();
  };

  const setIcone = () => {
    if (document.querySelector(".show-pwd").type === "password") {
      setIconePwd(
        <FontAwesomeIcon onClick={() => showOrHidePassword()} icon={faEye} />
      );
    } else {
      setIconePwd(
        <FontAwesomeIcon
          onClick={() => showOrHidePassword()}
          icon={faEyeSlash}
        />
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const handleFormSubmit = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    axios.post(API_USER, body, config).then((res) => {
      let code = res.status;

      console.log(res.data);
      if (code === 200) {
        localStorage.setItem("username", res.data.username);
        unConfirmed();
        toast.warning("check your mail to confirm your account");
        history.push(URL_ATTENTE);
      } else {
        history.push(URL_HOME);
      }
    });
  };

  useEffect(() => {
    setIcone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <h2>INSCRIPTION</h2>

      <div className="section-champs">
        <div className="champs-1">
          <div>
            <input
              {...register("nom")}
              placeholder="nom"
              onMouseEnter={(e) => (e.target.placeholder = "")}
              onMouseLeave={(e) => (e.target.placeholder = "nom")}
              className="form-input"
            />
            {errors.nom && <p className="error">{errors.nom.message}</p>}
          </div>

          <div>
            <input
              {...register("prenom")}
              placeholder="prenom"
              onMouseEnter={(e) => (e.target.placeholder = "")}
              onMouseLeave={(e) => (e.target.placeholder = "prenom")}
              className="form-input"
            />
            {errors.prenom && <p className="error">{errors.prenom.message}</p>}
          </div>

          <div>
            <input
              {...register("email")}
              className="form-input"
              placeholder="email"
              onMouseEnter={(e) => (e.target.placeholder = "")}
              onMouseLeave={(e) => (e.target.placeholder = "email")}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register("dateNaissance")}
              type="date"
              placeholder="date de naissance"
              pattern="(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))"
              className="form-input date-input"
            />
            {errors.dateNaissance && (
              <p className="error">{errors.dateNaissance.message}</p>
            )}
          </div>
        </div>

        <div className="champs-2">
          <div>
            <input
              {...register("username")}
              placeholder="nom d'utilisateur"
              className="form-input"
              onMouseEnter={(e) => (e.target.placeholder = "")}
              onMouseLeave={(e) => (e.target.placeholder = "nom d'utilisateur")}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>

          <div className="pwd-div">
            <input
              {...register("password")}
              placeholder="mot de passe"
              className="form-input show-pwd"
              type="password"
              onMouseEnter={(e) => (e.target.placeholder = "")}
              onMouseLeave={(e) => (e.target.placeholder = "mot de passe")}
            />

            {iconePwd}
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
        </div>
      </div>

      <input type="submit" value="valider" className="btn-form" />
    </form>
  );
}

export default InscriptionForm;
