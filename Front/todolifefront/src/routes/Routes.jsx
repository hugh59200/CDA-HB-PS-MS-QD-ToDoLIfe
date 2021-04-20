import React, { Component } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";

import Home  from "../views/Home"
import ConnexionForm from "../components/form/ConnexionForm"
import InscriptionForm from "../components/form/InscriptionForm"


import { createBrowserHistory } from 'history';

import { URL_CONNEXION, URL_HOME, URL_INSCRIPTION, URL_TODO_LIST } from "../shared/constant/URL_CONST";

import { PrivateRoute } from './../shared/PrivateRoute';
import TodoListView from "../views/TodoListView";




const CustomHistory = createBrowserHistory()

class Routes extends Component {
  render() {
    return (
      <>
        <Switch history={CustomHistory}>
          <Route exact path={URL_HOME} component={Home} />
          <Route path={URL_CONNEXION} component={ConnexionForm} />
          <Route path={URL_INSCRIPTION} component={InscriptionForm} />
          {/* <Route path={URL_TODO_LIST} component={TodoListView} /> */}
          
          
          <PrivateRoute path={URL_TODO_LIST} component={TodoListView} />
          {/* <Route component={Error404} /> */}
        </Switch>
      </>
    );
  }
}

export default Routes;
