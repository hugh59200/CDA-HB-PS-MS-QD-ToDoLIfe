import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  URL_SPORT_STATS_SPORTIVES_NEW,
  URL_SPORT_STATS_SPORTIVES_UPDATE,
} from "../../../../../constant/URL_CONST";
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
          <td className="td-decallage-label text-center">{elem.sport.label}</td>
          {/* <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> */}
          <td className="td-decalage-heure text-center">
            {elem.moyenneSemaine} h
          </td>
          <td className="button-group test td-decalage-action">
            <div
              onClick={() => modifier(elem.idStatistiquesSportives)}
              className="btn btn-success"
            >
              modifier
            </div>
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
        // console.log(res);
        history.go(0);
      })
      .catch((err) => {});
  };

  const modifier = (id) => {
    console.log("modifier l'id ", id);

    SportService.findstatSportwithId(id).then((res) => {
      console.log(res.data);

      history.push({
        pathname: URL_SPORT_STATS_SPORTIVES_UPDATE,
        customData: res.data,
      });
    });
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
              {/* <div className="d-flex flex-row justify-content-around">
              <th className="th-decallage-sport">
                <h3>Sport :</h3>
              </th>
              <th className="th-decallage-heure">
                <h3>Heure :</h3>
              </th>
              <th className="th-decalage-action">
                <h3>Action :</h3>
              </th>
              </div> */}
            </thead>
            <tbody className="d-flex flex-column justify-content-between">
              {list}
            </tbody>
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
