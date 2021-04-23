import React from "react";
import { Redirect, Route } from "react-router";
import { URL_CONNEXION } from "../constant/URL_CONST";
import { isAuthenticated } from "../service/authentificationService";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated()) return <Redirect to={URL_CONNEXION} />;
      return <Component {...props} />;
    }}
  />
);
