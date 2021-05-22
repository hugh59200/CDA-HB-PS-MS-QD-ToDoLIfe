import React, { useEffect, useState } from "react";
import Menu from "../../menu/MenuSport";

import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "../../../../assets/css/sport/stats/stats_gen.css";
import SportService from "../../../../service/SportService";
// import { useHistory } from "react-router";
import {} from "../../../../constant/URL_CONST";

const validationSchema = yup.object().shape({
  taille: yup.number().required("Required").min(150).max(210),
  poid: yup.number().required("Required"),
  age: yup.number().required("Required"),
  //   imc: yup.number().required("Required"),
});

const StatsGen = () => {
  //   const history = useHistory();

  const initialValues = {
    taille: JSON.parse(localStorage.getItem("stat_gen")).taille,
    poid: JSON.parse(localStorage.getItem("stat_gen")).poids,
    age: JSON.parse(localStorage.getItem("stat_gen")).age,
    //   imc: "",
  };

  const [imc, setImc] = useState(
    JSON.parse(localStorage.getItem("stat_gen")).imc
  );
  const [taille, setTaille] = useState(
    JSON.parse(localStorage.getItem("stat_gen")).taille
  );
  const [poid, setPoid] = useState(
    JSON.parse(localStorage.getItem("stat_gen")).poids
  );
  const [age, setAge] = useState(
    JSON.parse(localStorage.getItem("stat_gen")).age
  );

  const changeImcColor = () => {
    var valeur = parseInt(document.querySelector("#Mon_IMC").innerText, 10);

    // console.log(document.querySelector("#Mon_IMC").classList)

    if (valeur < 18.5) {
      //   console.log("bleu");
      document.querySelector("#Mon_IMC").className =
        "text-primary text-center imc-text";
    } else if (valeur > 18.5 && valeur < 25) {
      //   console.log("vert");
      document.querySelector("#Mon_IMC").className =
        "text-success text-center imc-text";
    } else if (valeur > 25 && valeur < 30) {
      //   console.log("orange");
      document.querySelector("#Mon_IMC").className =
        "text-warning text-center imc-text";
    } else {
      //   console.log("rouge");
      document.querySelector("#Mon_IMC").className =
        "text-danger text-center imc-text";
    }

    // console.log(myIMC)
    // console.log(valeur)
  };

  const calculIMC = () => {
    if (taille === 0 && poid === 0) {
    } else {
      let poid_kg = poid;
      let taille_metre = taille * 0.01;

      let imc_kg = poid_kg / (taille_metre * taille_metre);

      var rounded_imc = Math.round(imc_kg * 10) / 10;

      setImc(rounded_imc);

      // console.log(this.props.state.imc)

      let data = {
        taille: taille,
        poid: poid,
        age: age,
        imc: imc,
      };

      // console.log("data", data);

      updateStatsGen(data);
    }
  };

  const submit = (values) => {
    // console.log(values.taille);

    setTaille(values.taille);
    setPoid(values.poid);
    setAge(values.age);
    // console.log(values);

    // console.log(taille);

    calculIMC();
    changeImcColor();
  };

  const updateStatsGen = (data) => {
    // console.log("data", data);

    let statsG = JSON.parse(localStorage.getItem("stat_gen"));

    // console.log(data.taile)

    statsG = {
      idStatistiquesGenerales: JSON.parse(localStorage.getItem("stat_gen"))
        .idStatistiquesGenerales,
      taille: taille,
      poids: poid,
      age: age,
      imc: imc,
      statistiques: JSON.parse(localStorage.getItem("stat_gen")).statistiques,
    };

    // console.log("stat_gen", statsG);

    SportService.updateStatGen(statsG)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {})
      .finally(() => {
        //   setInterval(function(){
        //   }, 2000)
        //   history.push(URL_SPORT_STATS)
      });
  };

  const refeshIMC = () => {
    calculIMC();
    changeImcColor();
  };

  useEffect(() => {
    if (document.querySelector("#Mon_IMC").innerText === "NaN") {
      console.log("NOK");
      document.querySelector("#Mon_IMC").innerText = "";
    }
    setInterval(refeshIMC(), 2000);
  });

  return (
    <>
      <Menu />

      <div className="stats-gen-app">
        <h1 className="text-white text-center">Statistiques Générales</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validationSchema}
        >
          {(isSubmitting) => (
            <Form>
              <div className="infos-stats-gen d-flex flex-row align-self-stretch justify-content-around">
                <div className="part-gauche-stats-gen text-center d-flex flex-column align-self-stretch justify-content-center">
                  <div className="form-group ">
                    <label htmlFor="taille" className="text-white">
                      <h3>Taille :</h3>
                    </label>
                    <br />
                    <Field
                      className="input-stats-gen text-center"
                      type="number"
                      name="taille"
                      placeholder="taille"
                      min="150"
                      max="210"
                    />
                    <ErrorMessage
                      name="taille"
                      component="small"
                      className="text-warning"
                    />
                    &nbsp; &nbsp; &nbsp; <span className="text-white">cm</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="poid" className="text-white">
                      <h3>Poids :</h3>
                    </label>
                    <br />
                    <Field
                      className="input-stats-gen text-center"
                      type="number"
                      name="poid"
                      placeholder="poid"
                      min="40"
                      max="220"
                    />
                    <ErrorMessage
                      name="poid"
                      component="small"
                      className="text-warning"
                    />
                    &nbsp; &nbsp; &nbsp; <span className="text-white">kg</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="age" className="text-white">
                      <h3>Age :</h3>
                    </label>
                    <br />
                    <Field
                      className="input-stats-gen text-center"
                      type="number"
                      name="age"
                      placeholder="age"
                      min="10"
                      max="100"
                    />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="text-warning"
                    />
                    &nbsp; &nbsp; &nbsp; <span className="text-white">ans</span>
                  </div>
                </div>
                <div className="trait-stats-gen"></div>
                <div className="part-droite-stats-gen text-center d-flex flex-column align-self-stretch justify-content-center text-center">
                  <div className="d-flex flex-row justify-content-around align-items-center ">
                    <label
                      htmlFor=""
                      className="text-white text-center imc-text"
                    >
                      <h1>IMC :</h1>
                    </label>
                    <h2
                      className="text-white text-center"
                      id="Mon_IMC"
                    >
                      {imc}
                    </h2>
                  </div>

                  <button
                    className="btn btn-primary text-center calcul-imc-btn"
                    type="submit"
                    onClick={changeImcColor}
                  >
                    <h3>
                      calculer
                      <br />
                      mon IMC
                    </h3>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default StatsGen;
