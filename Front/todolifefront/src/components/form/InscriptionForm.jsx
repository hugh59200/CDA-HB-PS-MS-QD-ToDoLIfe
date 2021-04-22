import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { URL_ATTENTE, URL_HOME } from "../../shared/constant/URL_CONST.js";
import "./FormStyle.css";
import axios from "axios";
import { useHistory } from "react-router";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { API_USER } from "../../shared/constant/API_BACK.js";



const yup = require('yup')
require('yup-password')

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

  email: yup
    .string()
    .email()
    .required("champ obligatoire"),

  username: yup
    .string()
    .required("champ obligatoire")
    .min(2, "Trop court!")
    .max(20, "Trop long!"),

  dateNaissance: yup
    .date()
    .required("champ obligatoire")
    .typeError('Date invalide')
    .max(new Date(), "date future interdit"),

  password: yup
    .string()
    .required("champ obligatoire")
    .minUppercase(1, '1 majuscule minimum')
    .minNumbers(1, '1 chiffre minimum')
    .min(6, '6 caractères minimum.')
});

function InscriptionForm() {
  

  const history = useHistory();

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
      }
    }
    const body = JSON.stringify(data);
    // console.log(body);
    axios.post(API_USER, body, config).then((res) => {
      let code = res.status
      // console.log(res.data.nom)
      localStorage.setItem("username", res.data.username)
      if (code === 200 ){
        toast.warning("check your mail to confirm your account")
        history.push(URL_ATTENTE);
        
      } else {
        history.push(URL_HOME);
      }
    })
    
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <h2>INSCRIPTION</h2>

      <div className="section-champs">
        <div className="champs-1">
          <div>
            <input
              {...register("nom")}
              placeholder = 'nom'
              onMouseEnter={(e) => e.target.placeholder = ''}
              onMouseLeave={(e) => e.target.placeholder = 'nom'}
              className="form-input"
            />
            {errors.nom && <p className="error">{errors.nom.message}</p >}
          </div>

          <div>
            <input
              {...register("prenom")}
              placeholder = 'prenom'
              onMouseEnter={(e) => e.target.placeholder = ''}
              onMouseLeave={(e) => e.target.placeholder = 'prenom'}
              className="form-input"
            />
            {errors.prenom && <p className="error">{errors.prenom.message}</p >}
          </div>

          <div>
            <input
              {...register("email")}
              className="form-input"
              placeholder = 'email'
              onMouseEnter={(e) => e.target.placeholder = ''}
              onMouseLeave={(e) => e.target.placeholder = 'email'}
            />
            {errors.email && <p className="error">{errors.email.message}</p >}
          </div>

          <div>
            <input
              {...register("dateNaissance")}
              type="text"
              placeholder="date de naissance"
              onMouseEnter={(e) => e.target.type = 'date'}
              onMouseLeave={(e) => e.target.type = 'text'}
              className="form-input"
            />
            {errors.dateNaissance && <p className="error">{errors.dateNaissance.message}</p >}
          </div>
        </div>

        <div className="champs-2">
          <div>
            <input
              {...register("username")}
              placeholder="nom d'utilisateur"
              className="form-input"
              onMouseEnter={(e) => e.target.placeholder = ''}
              onMouseLeave={(e) => e.target.placeholder = "nom d'utilisateur"}
            />
            {errors.username && <p className="error">{errors.username.message}</p >}
          </div>

          <div>
            <input
              {...register("password")}
              placeholder="mot de passe"
              className="form-input"
              // type="password"
              onMouseEnter={(e) => e.target.placeholder = ''}
              onMouseLeave={(e) => e.target.placeholder = "mot de passe"}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
        </div>
      </div>

      <input type="submit" value="valider" className="btn-form" />
      
    </form>
  );
}

export default InscriptionForm;