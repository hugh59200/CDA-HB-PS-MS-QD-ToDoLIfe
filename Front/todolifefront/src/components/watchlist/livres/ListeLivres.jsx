// /* eslint-disable no-lone-blocks */
// import React from "react";
// import axios from "axios";
// import { API_LIVRES } from "../../../constant/API_BACK";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { URL_MODIF_LIVRE } from "./../../../constant/URL_CONST";

// const ListeLivres = () => {
//   var idUtilisateur = localStorage.getItem("id");
//   const history = useHistory();
//   const [listeLivre, setListeLivre] = useState([]);

//   useEffect(() => {
//     axios
//       .get(API_LIVRES + "/utilisateurs/" + idUtilisateur)
//       .then(function (response) {
//         if (response.status === 200) {
//           setListeLivre(response.data);
//           listeLivre.map((livre, i) => {
//             console.log(livre);
//           });

//           console.log(response.data);
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="row w-100 m-auto justify-content-around">
//         <div className="ajout-film2 row mb-1">
//           <div className="titre-film text-white col-lg-8 col-7">Titre</div>
//           <div className="titre-film text-white  col-lg-2 col-2">Page</div>
//           <div className="titre-film  col-lg-2 col-3"></div>
//         </div>
//       </div>
//       <div className="row w-100 m-auto justify-content-around">
//         {listeLivre.map((livres, i) => (
//           <>
//             <div className="ajout-film row mb-1">
//               <div
//                 className="titre-film  col-lg-8 col-7"
//                 onClick={() => {
//                   let livreEnQuestion = {
//                     avis: livres.avis,
//                     idLivre: livres.idLivre,
//                     pageActuel: livres.pageActuel,
//                     title: livres.title,
//                   };

//                   history.push({
//                     pathname: URL_MODIF_LIVRE,
//                     livreEnQuestion: livreEnQuestion,
//                   });
//                 }}
//               >
//                 <span className="text-white">{livres.title}</span>
//               </div>
//               <div
//                 className="titre-film col-lg-2 col-2"
//                 onClick={() => {
//                   let livreEnQuestion = {
//                     avis: livres.avis,
//                     idLivre: livres.idLivre,
//                     pageActuel: livres.pageActuel,
//                     title: livres.title,
//                   };

//                   history.push({
//                     pathname: URL_MODIF_LIVRE,
//                     livreEnQuestion: livreEnQuestion,
//                   });
//                 }}
//               >
//                 <span className="text-white">{livres.pageActuel}</span>
//               </div>
//               <div className="icone-suppr-edit col-lg-2 col-3 p-0">
//                 <button
//                   className="boutton-supprimer"
//                   onClick={() => {
//                     axios({
//                       method: "delete",
//                       url: API_LIVRES + "/" + livres.idLivre,
//                     })
//                       .then(function (reponse) {
//                         //On traite la suite une fois la réponse obtenue
//                         console.log(reponse);
//                       })
//                       .catch(function (erreur) {
//                         //On traite ici les erreurs éventuellement survenues
//                         console.log(erreur);
//                       });
//                     window.location.reload();
//                   }}
//                 ></button>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </>
//   );
// };
// export default ListeLivres;
