// import React from "react";
// import { useState } from "react";
// import { useLayoutEffect } from "react";
// import { NavLink, useHistory } from "react-router-dom";
// import {
//   deconnected,
//   isAuthenticated,
// } from "../../service/authentificationService";
// import {
//   URL_CONNEXION,
//   URL_HOME,
//   URL_TODO_LIST,
// } from "../constant/URL_CONST";

// const NavigationBar = () => {
//   const [data, setData] = useState("");

//   const history = useHistory();
//   const logout = () => {
//     localStorage.removeItem("id");
//     localStorage.removeItem("username");
//     localStorage.removeItem("token");
//     deconnected();
//     history.push(URL_HOME);
//   };

//   const loginOrLogout = () => {
//     return isAuthenticated() && localStorage.getItem("username") != null ? (
//       <>
//         <li>
//           <NavLink
//             to={URL_TODO_LIST}
//             className="nav-link text-white"
//             activeClassName="font-weight-bold"
//           >
//             todolist
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             onClick={logout}
//             to={URL_HOME}
//             className="nav-link text-white"
//             activeClassName="font-weight-bold"
//           >
//             Logout
//           </NavLink>
//         </li>
//       </>
//     ) : (
//       <NavLink
//         to={URL_CONNEXION}
//         className="nav-link text-white"
//         activeClassName="font-weight-bold"
//       >
//         Log in
//       </NavLink>
//     );
//   };

//   useLayoutEffect(() => {
//     setData(loginOrLogout());

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return <>{data}</>;
// };

// export default NavigationBar;

