import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";

import "../../../../assets/css/sport/searchBar/search_bar.css";
import "../../../../assets/css/sport/activites/new_activite.css";
// import { URL_SPORT_STATS } from "../../../../../constant/URL_CONST";
// import SportService from "../../../../../service/SportService";

import * as yup from "yup";
import SportService from "../../../../service/SportService";
import { URL_SPORT_ACTVITES } from "../../../../constant/URL_CONST";

const validationSchema = yup.object().shape({
  label: yup.string().required("Required"),
  // distance: yup.number().required("Required"),
  // elevation: yup.number().required("Required"),
  // jour: yup.date().required("Required"),
});

const FormActivite = () => {
  const history = useHistory();

  const [temps, setTemps] = useState("");

  const [sport, setSport] = useState("");

  const initialValues = {
    label: "",
    distance: "",
    elevation: "",
    jour: "",
    heures: "",
    minutes: "",
    secondes: "",
  };

  const submit = (values) => {
    // console.log(values)

    let temps_data_form = {
      heures: values.heures,
      minutes: values.minutes,
      secondes: values.secondes,
    };

    SportService.createTemps(temps_data_form)
      .then((res) => {
        // console.log("res", res);
      })
      .catch((err) => {
        // console.log(err)
      });

    SportService.findTemps(values.heures, values.minutes, values.secondes)
      .then((res) => {
        // console.log("res", res);


        setTemps(JSON.stringify(res.data))
        
        // console.log("temps",temps)
      })
      .catch((err) => {
        // console.log(err)
      });

    SportService.findBylabel(localStorage.getItem("sport")).then((res) => {
      // console.log(res)

      setSport(JSON.stringify(res.data));
      
      // console.log("sport",sport)
    })
    .catch((err) => {
      // console.log(err)
    });

    let data = {
      distance: values.distance,
      elevation: values.elevation,
      jour: values.jour,
      label: values.label,
      sport: JSON.parse(sport),
      temps: JSON.parse(temps),
      // "trace": {
      //   "idTrace": 0,
      //   "label": "string"
      // },
      utilisateur: JSON.parse(localStorage.getItem("user")),
    };

    // console.log("data", data);
    
    
    SportService.createActivite(data)
    .then((res) => {
      console.log(res)
      
      
      
      history.push(URL_SPORT_ACTVITES)
    })
    
    
    
    
    

    // let test = {
    //   label: values.label,
    //   distance: values.distance,
    //   elevation: values.elevation,
    //   jour: values.jour,
    //   temps: temps_data,
    // };

    // console.log(test)

    // console.log(values);
    // let sport_label = localStorage.getItem("sport");
    // SportService.findBylabel(sport_label)
    //   .then((res) => {
    //     let data = {
    //       "moyenneSemaine": values.moyenne,
    //       "sport": {
    //         "idSport": res.data.idSport,
    //         "label": res.data.label
    //       },
    //       "statistiques":  JSON.parse(localStorage.getItem("stat"))
    //     }
    //     console.log("data", data);
    //     SportService.createStatSport(data).then((res) => {
    //       console.log("res", res);
    //     });
    //   })
    //   .catch((err) => {}
    //          );
    //   localStorage.removeItem("sport")
    //   history.push(URL_SPORT_STATS)
    //   // history.go(0)
  };

  return (
    <>
      <div id="form-stat-sport" className="not-show-search-bar-sport">
        <br />

        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="d-flex flex-column align-items-center justify-content-center form-moyenne-semaine form-activite">
                <div>
                  <div className="form-group d-flex flex-row align-items-center">
                    <label htmlFor="label" className="text-white">
                      <h3>Label :</h3>
                    </label>
                    <br />
                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="text"
                        name="label"
                        placeholder="label"
                      />
                      &nbsp; &nbsp; &nbsp;{" "}
                      <span className="text-white">&nbsp;</span>
                    </div>
                    <ErrorMessage
                      name="label"
                      component="small"
                      className="text-warning"
                    />
                  </div>

                  <div className="form-group d-flex flex-row align-items-center">
                    <label htmlFor="distance" className="text-white">
                      <h3>Distance :</h3>
                    </label>
                    <br />
                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="number"
                        name="distance"
                        placeholder="distance"
                      />
                      &nbsp; &nbsp; &nbsp;{" "}
                      <span className="text-white">km</span>
                    </div>
                    <ErrorMessage
                      name="distance"
                      component="small"
                      className="text-warning"
                    />
                  </div>

                  <div className="form-group d-flex flex-row align-items-center">
                    <label htmlFor="elevation" className="text-white">
                      <h3>Elevation :</h3>
                    </label>
                    <br />
                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="number"
                        name="elevation"
                        placeholder="elevation"
                      />
                      &nbsp; &nbsp; &nbsp; <span className="text-white">m</span>
                    </div>
                    <ErrorMessage
                      name="elevation"
                      component="small"
                      className="text-warning"
                    />
                  </div>

                  <div className="form-group d-flex flex-row align-items-center">
                    <label htmlFor="jour" className="text-white">
                      <h3>Jour :</h3>
                    </label>
                    <br />
                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="date"
                        name="jour"
                        placeholder="jour"
                      />
                      &nbsp; &nbsp; &nbsp;
                      <span className="text-white">&nbsp;</span>
                    </div>
                    <ErrorMessage
                      name="jour"
                      component="small"
                      className="text-warning"
                    />
                  </div>

                  <div className="form-group d-flex flex-row align-items-center">
                    <label htmlFor="" className="text-white">
                      <h3>Temps :</h3>
                    </label>
                    <br />
                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="number"
                        name="heures"
                        placeholder="heures"
                        min="0"
                      />
                      &nbsp; &nbsp; &nbsp;
                      <span className="text-white">h</span>
                    </div>
                    <ErrorMessage
                      name="heures"
                      component="small"
                      className="text-warning"
                    />

                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="number"
                        name="minutes"
                        placeholder="minutes"
                        min="0"
                        max="59"
                      />
                      &nbsp; &nbsp; &nbsp;
                      <span className="text-white">m</span>
                    </div>
                    <ErrorMessage
                      name="minutes"
                      component="small"
                      className="text-warning"
                    />

                    <div>
                      <Field
                        className="text-center input-search-sport"
                        type="number"
                        name="secondes"
                        placeholder="secondes"
                        min="0"
                        max="59"
                      />
                      &nbsp; &nbsp; &nbsp;
                      <span className="text-white">s</span>
                    </div>
                    <ErrorMessage
                      name="secondes"
                      component="small"
                      className="text-warning"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary text-center btn-form-sport"
                  type="submit"
                  // onClick={changeImcColor}
                >
                  <h3>Envoyer</h3>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormActivite;
