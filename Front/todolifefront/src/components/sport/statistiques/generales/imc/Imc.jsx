import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_SPORT_STATS } from "../../../../../constant/URL_CONST";
import SportService from "../../../../../service/SportService";

const validationSchema = yup.object().shape({
  taille: yup.number().required("Required").min(150).max(230),
  poid: yup.number().required("Required").min(40).max(250),
  age: yup.number().required("Required").min(10).max(100),
  //   imc: yup.number().required("Required"),
});

const Imc = () => {
  const history = useHistory();

  const initialValues = {
    taille: 0,
    poid: 0,
    age: 0,
    //   imc: "",
  };

  const [imc, setImc] = useState(JSON.parse(localStorage.getItem("stat_gen")).imc);
  const [taille, setTaille] = useState(JSON.parse(localStorage.getItem("stat_gen")).taille);
  const [poid, setPoid] = useState(JSON.parse(localStorage.getItem("stat_gen")).poids);
  const [age, setAge] = useState(JSON.parse(localStorage.getItem("stat_gen")).age);

  const calculIMC = () => {
    if (poid !== 0 && taille !== 0) {
      let poid_kg = poid;
      let taille_metre = taille * 0.01;
      let imc_kg = poid_kg / (taille_metre * taille_metre);
      var rounded_imc = Math.round(imc_kg * 10) / 10;
      setImc(rounded_imc);

      // id_statistiques_generale
      // localStorage.setItem("imc", false);

      // SportService.FindBadgeByStatIdAndByLabel(id, "IMC").then((res) => {
      //   console.log(res);
      // });

      let id = JSON.parse(localStorage.getItem("stat")).idStatistiques;

      SportService.checkIfUserGetStatGen(id).then((res) => {
        let data_imc = {
          idStatistiquesGenerales: res.data.idStatistiquesGenerales,
          taille: taille,
          poid: poid,
          age: age,
          imc: imc,
          statistiques: res.data.statistiques,
        };
        
        

        // id_statistiques_generale
        // console.log(res.data)

        console.log("res data", res.data);

        if (
          res.data.imc === null &&
          JSON.parse(localStorage.getItem("stat_gen")).imc === null
        ) {
          console.log("coucou");
          // let test = {
          //   label: "IMC",
          //   statistiques: JSON.parse(localStorage.getItem("stat")),
          // };

          // SportService.createBadge(test);

          updateStatsGen(data_imc);
        } else {
          console.log("coucou");
          updateStatsGen(data_imc);
        }
      });
    }
  };

  const updateStatsGen = (data) => {
    let statsG = {
      idStatistiquesGenerales: data.idStatistiquesGenerales,
      taille: data.taille,
      poids: data.poid,
      age: data.age,
      imc: data.imc,
      statistiques: data.statistiques,
    };

    localStorage.setItem("stat_gen", JSON.stringify(statsG));

    console.log("statsG", statsG);

    SportService.updateStatGen(statsG)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {})
      .finally(() => {});
  };

  const changeImcColor = () => {
    calculIMC();
    var valeur = parseInt(document.querySelector("#Mon_IMC").innerText, 10);

    if (valeur < 18.5) {
      document.querySelector("#Mon_IMC").className =
        "text-primary text-center imc-text";
    } else if (valeur > 18.5 && valeur < 25) {
      document.querySelector("#Mon_IMC").className =
        "text-success text-center imc-text";
    } else if (valeur > 25 && valeur < 30) {
      document.querySelector("#Mon_IMC").className =
        "text-warning text-center imc-text";
    } else {
      document.querySelector("#Mon_IMC").className =
        "text-danger text-center imc-text";
    }

    // history.push(URL_SPORT_STATS)
  };

  const submit = (values) => {
    setTaille(values.taille);
    setPoid(values.poid);
    setAge(values.age);
    calculIMC();
    changeImcColor();
  };

  const refeshIMC = () => {
    calculIMC();
    avoidNanText();
    changeImcColor();
  };

  const avoidNanText = () => {
    if (document.querySelector("#Mon_IMC").innerText === "NaN") {
      // console.log("NOK");
      document.querySelector("#Mon_IMC").innerText = "0";
    }
  };

  useEffect(() => {
    if (document.querySelector("#Mon_IMC").innerText === "NaN") {
      // console.log("NOK");
      document.querySelector("#Mon_IMC").innerText = "0";
    }

    avoidNanText();
    // changeImcColor();
    setInterval(refeshIMC(), 2000);
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
      >
        {() => (
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
                    max="230"
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
                    max="250"
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
                  <label htmlFor="" className="text-white text-center imc-text">
                    <h1>IMC :</h1>
                  </label>
                  <h2 className="text-white text-center" id="Mon_IMC">
                    {imc}
                  </h2>
                </div>

                <button
                  className="btn btn-primary text-center calcul-imc-btn"
                  type="submit"
                  onClick={changeImcColor}
                >
                  <h3>
                    Calculer
                    <br />
                    mon IMC
                  </h3>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Imc;
