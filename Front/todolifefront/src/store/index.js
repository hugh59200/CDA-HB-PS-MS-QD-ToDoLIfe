// import { createStore } from "redux";
// import { isAuthenticated } from "../service/authentificationService";
// import AllReducers from "./reducers/AllReducers";
// // let loginStatus=()=>{
// //   // return localStorage.getItem('token')?true:false;
// //   if(localStorage.getItem('token') && (typeof localStorage.getItem('token')!=='undefined'))
// //   {
// //     return true;
// //   }
// //   else
// //   {
// //     return false;
// //   }
// // }
// let loginDetail=()=>{
//   return localStorage.getItem('username')?localStorage.getItem('username'):null;
// }
// const initialStates = {
//   auth: {
//     loggedIn: isAuthenticated(),
//     user: loginDetail()
//   }
// };
// const store = createStore(
//   AllReducers,
//   initialStates,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;