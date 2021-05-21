import React, { Component } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import {
  URL_ATTENTE,
  URL_CONNEXION,
  URL_FILMS,
  URL_HOME,
  URL_INSCRIPTION,
  URL_INSIDE_TODOLIST,
  URL_JOURNAL,
  URL_LIVRES,
  URL_MODIF_FILM,
  URL_MODIF_LIVRE,
  URL_MODIF_SERIE,
  URL_NEW_TODO,
  URL_NEW_TODO_LIST,
  URL_SERIES,
  URL_SPORT,
  URL_STATISTIQUE,
  URL_TABLEAU_CHOIX,
  URL_TODO_LIST,
  URL_UPDATE_TODO,
  URL_UPDATE_TODO_LIST,
  URL_WATCHLIST,
} from "../constant/URL_CONST";
import { URL_NEW_FILM, URL_NEW_LIVRE, URL_NEW_SERIE } from './../constant/URL_CONST';

import AddList from "../components/todoList/liste/AddList";
import AddTodo from "../components/todoList/todo/AddTodo";
import AttenteValidation from "../components/pageArrive/AttenteValidation";
import ConnexionForm from "../components/form/ConnexionForm";
import Films from './../components/watchlist/film/Films';
import { GraphiqueHumeurDuMois } from './../components/journal/graphique/GraphiqueHumeurDuMois';
import Home from "../views/home/Home";
import InscriptionForm from "../components/form/InscriptionForm";
import Livres from "../components/watchlist/livres/Livres";
import MaWatchlist from "../components/watchlist/MaWatchlist";
import ModifFilm from './../components/watchlist/film/ModifFilm';
import ModifLivre from './../components/watchlist/livres/ModifLivre';
import ModifSerie from './../components/watchlist/series/ModifSerie';
import MonJournal from "../components/journal/MonJournal";
import NewFilm from './../components/watchlist/film/NewFilm';
import NewLivre from './../components/watchlist/livres/NewLivre';
import NewSerie from './../components/watchlist/series/NewSerie';
import { PrivateRoute } from "./PrivateRoute";
import { Route } from "react-router";
import Series from './../components/watchlist/series/Series';
import Sport from "../components/sport/Sport";
import Switch from "react-bootstrap/esm/Switch";
import TableauDeBordJournal from "../components/journal/TableauDeBordJournal";
import TodoListView from "../components/todoList/liste/TodoListView";
import Todos from "../components/todoList/todo/Todos";
import UpdateList from "../components/todoList/liste/UpdateList";
import UpdateTodo from "../components/todoList/todo/UpdateTodo";
import { createBrowserHistory } from 'history';

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

          {/* view todolist */}
          <PrivateRoute path={URL_TODO_LIST} component={TodoListView} />
          {/* add todolist */}
          <PrivateRoute path={URL_NEW_TODO_LIST} component={AddList} />
          {/* update todolist */}
          <PrivateRoute path={URL_UPDATE_TODO_LIST} component={UpdateList} />
          {/* add todo on todolist */}
          <PrivateRoute path={URL_INSIDE_TODOLIST} component={Todos} />
          {/* add a todo */}
          <PrivateRoute path={URL_NEW_TODO} component={AddTodo} />
          {/* update a todo */}
          <PrivateRoute path={URL_UPDATE_TODO} component={UpdateTodo} />
          {/* view journal*/}
          <PrivateRoute path={URL_TABLEAU_CHOIX} component={TableauDeBordJournal} />
          <PrivateRoute path={URL_STATISTIQUE} component={GraphiqueHumeurDuMois} />
          <PrivateRoute path={URL_JOURNAL} component={MonJournal} />

          {/* view watchlist*/}
          <PrivateRoute path={URL_WATCHLIST} component={MaWatchlist} />
          <PrivateRoute path={URL_LIVRES} component={Livres} />
          <PrivateRoute path={URL_NEW_LIVRE} component={NewLivre} />
          <PrivateRoute path={URL_MODIF_LIVRE} component={ModifLivre} />
          <PrivateRoute path={URL_SERIES} component={Series} />
          <PrivateRoute path={URL_NEW_SERIE} component={NewSerie} />
          <PrivateRoute path={URL_MODIF_SERIE} component={ModifSerie} />

          <PrivateRoute path={URL_FILMS} component={Films} />
          <PrivateRoute path={URL_NEW_FILM} component={NewFilm} />
          <PrivateRoute path={URL_MODIF_FILM} component={ModifFilm} />
          
          <PrivateRoute path={URL_SPORT} component={Sport} />

          
          {/* <Route component={Error404} /> */}

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
