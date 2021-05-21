import "../../assets/css/navbar/NavBar.css"

import { NavLink, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  URL_CONNEXION,
  URL_HOME,
  URL_INSCRIPTION,
  URL_TABLEAU_CHOIX,
  URL_TODO_LIST,
  URL_WATCHLIST,
  URL_SPORT,
} from "../../constant/URL_CONST";

import { deconnected } from "../../service/authentificationService";
import logo from '../../assets/img/logotodolife.png'

const NavBar = () => {

  const history = useHistory();
  const [btnLog, setBtnLog] = useState("");
  const changeNavBar = () => {

    if (localStorage.getItem("token") == null) {

      setBtnLog(
        <>
          <li className="nav-item">
            <NavLink
              to={URL_CONNEXION}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={URL_INSCRIPTION}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              register
            </NavLink>
          </li>
        </>
      );

    } else {

      setBtnLog(
        <>
          <li className="nav-item">
            <NavLink
              to={URL_TODO_LIST}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              TodoList
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_TABLEAU_CHOIX}
              onClick={removeTodoList}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              Journal
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_WATCHLIST}
              onClick={removeTodoList}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              WatchList
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink
              to={URL_SPORT}
              onClick={removeTodoList}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              Sport
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_HOME}
              onClick={logout}
              className="nav-link color-black-navBar"
              activeClassName="font-weight-bold"
            >
              logout
            </NavLink>
          </li>
        </>
      );
    }
  };

  const logout = () => {
    deconnected();
    // history.push(URL_HOME);
    history.go(0);
  };

  const removeTodoList = () =>{
    localStorage.removeItem('id_todolist')
    localStorage.removeItem('label_todolist')
  }

  useEffect(() => {
    changeNavBar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="navbar navbar-expand-lg">
      <NavLink
                to={URL_HOME}
                onClick={removeTodoList}
                className="nav-link text-white"
                activeClassName="font-weight-bold"
              >
                <img src={logo} className="logotodolife" alt="" />
              </NavLink>
        
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              
            </li>
            {btnLog}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
