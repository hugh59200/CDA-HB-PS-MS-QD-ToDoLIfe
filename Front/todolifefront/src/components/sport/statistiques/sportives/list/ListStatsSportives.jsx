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

    SportService.checkIfUserGetStatSpor(id).then((res) => {
      // console.log(res);

      let dataRecup = res.data.map((elem, i) => (
        <div key={i}>
          <div>{elem.moyenne_semaine}</div>
        </div>
      ));
      setList(dataRecup);
    });
  };

  const ajouter = () => {
    history.push(URL_SPORT_STATS_SPORTIVES_NEW);
  };

  useEffect(() => {
    showMyStats();
  }, []);

  return (
    <>
      <div className="stats-sport-list">
        <div className="d-flex flex-column justify-content-around align-items-center">
          {/* <h1 className="text-white text-center">
        listes de mes Statistique Sportives
      </h1> */}

          <div>
            {list}

          </div>
        </div>
      </div>
            <div
              className="btn btn-success d-flex flex-column justify-content-around align-items-center"
              onClick={ajouter}
            >
              ajouter
            </div>
    </>
  );
};

export default ListStatsSportives;
