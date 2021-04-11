import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_HOME, URL_TODO_LIST } from '../../constant/URL_CONST';


const NavBar = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="/">ToDoLife</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink to={URL_HOME} className="nav-link text-white" activeClassName="font-weight-bold">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={URL_TODO_LIST} className="nav-link text-white" activeClassName="font-weight-bold">TodoList</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to={URL_HOME} className="nav-link text-white" activeClassName="font-weight-bold">Dashboard</NavLink> */}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default NavBar;