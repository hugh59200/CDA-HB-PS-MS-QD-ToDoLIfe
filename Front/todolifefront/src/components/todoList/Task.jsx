

// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
// // import { useHistory } from "react-router";
// import TacheService from "../../service/TacheService";
// // import { useHistory } from 'react-router';

// const Task = () => {
//   const history = useHistory();

//   // console.log(history.location.id);

//   const [listId, setListId] = useState();

//   const [label, setLabel] = useState();

//   const [tache, setTache] = useState();

//   const changeLabel = () => {
//     // console.log("click");
//     console.log(history.location.label);
//     // setLabel(history)
//   };

//   useEffect(() => {
//     TacheService.getListByIdToDoList(listId).then((res) => {
//       let dataRecup = res.data;

//       let postData = dataRecup.map((elem) => (
//         <tr key={elem.idTache}>
//           <td>{elem.label}</td>
//         </tr>
//       ));
//       setTache(postData);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // const history = useHistory();
//   //   console.log(history.location.curentList)

//   return (
//     <>
//       <div>
//         <h1 className="text-white text-center" onClick={changeLabel}>
//           Label :
//         </h1>
//         {label}
//       </div>
//       <table>
//         <thead>
//           <tr>{/* <th className="text-white "> label </th> */}</tr>
//         </thead>
//         <tbody>{tache}</tbody>
//       </table>
//     </>
//   );
// };

// export default Task;
