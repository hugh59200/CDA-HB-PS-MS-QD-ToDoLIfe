import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./styles.css";
import axios from "axios";

const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .required(),
    // .min(2, "Trop court!")
    // .max(20, "Trop long!")
    // .required("champ oblligatoire"),

  password: yup
    .string()
    .required("Please Enter your password")
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // )
});

function RegisterForm() {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    // const user = JSON.stringify("username : " + data.username + ", password : " + data.password);
    // return axios.post(`http://localhost:8080/utilisateurs` + user);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Bienvenue</h2>

      <div>
        <input
          {...register("username")}
          placeholder="nom d'utilisateur"
          className="form-input"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          {...register("password")}
          placeholder="mot de passe"
          className="form-input"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <input type="submit" value="se connecter" className="btn-register" />
    </form>
  );
}

export default RegisterForm;
