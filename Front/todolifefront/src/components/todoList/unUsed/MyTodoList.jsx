// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
// import TodolistService from "../../service/TodolistService";
// import { URL_TODO_LIST } from "../../shared/constant/URL_CONST";

// const MyTodoList = () => {
//   const history = useHistory();

//   const [list, setList] = useState();

//   useEffect(() => {
//     TodolistService.getList().then((res) => {
//       let dataRecup = res.data;
//       let postData = dataRecup.map((elem) => (
//         <tr
//           onClick={() => changeCurrentList(elem)}
//           className=" table-bordered"
//           key={elem.idTodoList}
//         >
//           <td className="text-white"> {elem.label} </td>
//         </tr>
//       ));
//       setList(postData);
//     });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);

//   const changeCurrentList = (elem) => {

//     history.push({
//       pathname: URL_TODO_LIST,
//       id: elem.idTodoList,
//       label: elem.label
//     });
    
//     // console.log(history.location.id);
//   };

//   return (
//     <>
//       <h1 className="text-white text-center ">My tolist :</h1>
//       <br />
//       <div className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
//         <table>
//           <thead>
//             <tr>{/* <th className="text-white "> label </th> */}</tr>
//           </thead>
//           <tbody>{list}</tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default MyTodoList;
