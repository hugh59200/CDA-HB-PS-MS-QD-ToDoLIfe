import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { URL_SPORT_STATS_SPORTIVES_NEW } from "../../../../../constant/URL_CONST";
import SportService from "../../../../../service/SportService";

const ListStatsSportives = () => {
  const history = useHistory();

  const [list, setList] = useState("");

  const showMyStats = () => {
    const id = JSON.parse(localStorage.getItem("stat")).idStatistiques;

    // console.log("id", id);

    SportService.findByStatId(id).then((res) => {
      // console.log(res);

      let dataRecup = res.data;

      console.log(dataRecup);

      let test = dataRecup.map((elem, i) => (
        <tr
          className="text-center text-white d-flex flex-row justify-content-around"
          key={i}
        >
          <td className="td-decallage">{elem.sport.label}</td>
          {/* <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> */}
          <td className="td-decallage">{elem.moyenneSemaine}</td>
          <td className="button-group test">
            <div className="btn btn-success">modifier</div>
            <div
              onClick={() => supprimer(elem.idStatistiquesSportives)}
              className="btn btn-danger"
            >
              supprimer
            </div>
          </td>
        </tr>
      ));

      setList(test);
    });
  };

  const supprimer = (id) => {
    // console.log("supprimer l'id ",id)

    SportService.deleteStatsSportive(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  const ajouter = () => {
    history.push(URL_SPORT_STATS_SPORTIVES_NEW);
  };

  useEffect(() => {
    setInterval(showMyStats(), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="stats-sport-list">
        <div className="d-flex flex-column justify-content-around align-items-center">
          {/* <h1 className="text-white text-center">
        listes de mes Statistique Sportives
      </h1> */}

          <table className="text-center text-white tab-stat-sport">
            <thead className="text-center d-flex flex-row justify-content-center">
              <th>
                <h3>Sport :</h3>
              </th>
              <div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
              <th>
                <h3 className="decalage-list-stats-sport">Heure :</h3>
              </th>
              <th></th>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
      <br />
      <div
        className="d-flex flex-column justify-content-around align-items-center add-stat-sport-btn btn btn-primary"
        onClick={ajouter}
      >
        ajouter
      </div>
    </>
  );
};

export default ListStatsSportives;
