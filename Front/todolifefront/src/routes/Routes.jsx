import React, { Component } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";

import Home from "../views/home/Home";
import ConnexionForm from "../components/form/ConnexionForm";
import InscriptionForm from "../components/form/InscriptionForm";
import AttenteValidation from "../components/pageArrive/AttenteValidation";

import { createBrowserHistory } from "history";

import {
  URL_ATTENTE,
  URL_CONNEXION,
  URL_HOME,
  URL_INSCRIPTION,
  URL_JOURNAL,
  URL_TODO_LIST,
  URL_DECONNEXION,
  URL_WATCHLIST,
} from "../constant/URL_CONST";

import { PrivateRoute } from "./PrivateRoute";
import TodoListView from "../views/TodoListView";
import { ToastContainer, Zoom } from "react-toastify";
import MonJournal from "../components/journal/MonJournal";
import MaWatchlist from "../components/watchlist/MaWatchlist";

import Auth from "../service/Auth";
// import Error404 from "../views/Error404";

const CustomHistory = createBrowserHistory();

class Routes extends Component {
  state = {
    connected: false,
  };

  render() {
    return (
      <>
        <Switch history={CustomHistory}>
          {/* Home */}
          <Route exact path={URL_HOME} component={Home} />

          {/* Form Inscription */}
          <Route path={URL_INSCRIPTION} component={InscriptionForm} />

          {/* page d'attente de validation */}
          <Route path={URL_ATTENTE} component={AttenteValidation} />

          {/* Form Connection */}
          <Route path={URL_CONNEXION} component={ConnexionForm} />

          {/* page Deconnection */}
          <Route path={URL_DECONNEXION} component={Auth} />

          {/* view todolist */}
          <PrivateRoute path={URL_TODO_LIST} component={TodoListView} />

          {/* view journal*/}
          <PrivateRoute path={URL_JOURNAL} component={MonJournal} />

          {/* view watchlist*/}
          <PrivateRoute path={URL_WATCHLIST} component={MaWatchlist} />
          {/* <Route component={Error404} /> */}

          {/* composants toaster */}
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={10000}
          />
        </Switch>
      </>
    );
  }
}

export default Routes;
