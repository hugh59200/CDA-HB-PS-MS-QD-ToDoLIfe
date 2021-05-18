import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  URL_CONNEXION,
  URL_HOME,
  URL_INSCRIPTION,
  URL_TODO_LIST,
  URL_JOURNAL,
  URL_WATCHLIST,
} from "../../constant/URL_CONST";

import { deconnected } from "../../service/authentificationService";
import "../../assets/css/navbar/NavBar.css"
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
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={URL_INSCRIPTION}
              className="nav-link text-white"
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
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              TodoList
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_JOURNAL}
              onClick={removeTodoList}
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              Journal
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_WATCHLIST}
              onClick={removeTodoList}
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              WatchList
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={URL_HOME}
              onClick={logout}
              className="nav-link text-white"
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
        <img src={logo} className="logotodolife" alt="" />
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to={URL_HOME}
                onClick={removeTodoList}
                className="nav-link text-white"
                activeClassName="font-weight-bold"
              >
                Home
              </NavLink>
            </li>
            {btnLog}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
