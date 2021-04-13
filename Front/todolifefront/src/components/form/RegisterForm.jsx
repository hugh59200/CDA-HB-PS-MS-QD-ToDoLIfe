import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./styles.css";

const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(2, "Trop court!")
    .max(20, "Trop long!")
    .required("champ oblligatoire"),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Bienvenue</h2>

      <div>
        <input
          {...register("lastName")}
          placeholder="nom d'utilisateur"
          className="form-input"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          {...register("website")}
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
