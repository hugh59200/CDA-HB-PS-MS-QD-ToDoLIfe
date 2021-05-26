import React from "react";
import Menu from "../../../menu/MenuSport";

import "../../../../../assets/css/sport/stats/stats_spor.css";
import { useHistory } from "react-router";
import SportService from "../../../../../service/SportService";
import { URL_SPORT_STATS } from "../../../../../constant/URL_CONST";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  moyenne: yup.string().required("Required"),
});

const ModifierStatsSport = () => {
  const history = useHistory();

  const initialValues = {
    // moyenne: history.location.customData.moyenneSemaine,
    moyenne: history.location.customData.moyenneSemaine,
  };

  const submit = (values) => {
    console.log(values);

    let data = {
      idStatistiquesSportives:
        history.location.customData.idStatistiquesSportives,
      moyenneSemaine: values.moyenne,
      sport: history.location.customData.sport,
      statistiques: history.location.customData.statistiques,
    };
    console.log(data);

    SportService.updateStatSport(data).then((res) => {
      console.log("res");
    });

    history.push(URL_SPORT_STATS);
  };

  return (
    <>
      <Menu />

      <div className="stat-spor-app">
        <h1 className="text-white text-center">Modifier une stat sportives</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="d-flex flex-column align-items-center justify-content-center form-moyenne-semaine">
                <div className="form-group d-flex flex-column align-items-center">
                  <label htmlFor="moyenne" className="text-white">
                    <h3>Moyenne par semaine :</h3>
                  </label>
                  <br />
                  <div>
                    <Field
                      className="text-center input-search-sport"
                      type="number"
                      name="moyenne"
                      placeholder="moyenne"
                      min="0"
                    />
                    &nbsp; &nbsp; &nbsp; <span className="text-white">h</span>
                  </div>
                  <ErrorMessage
                    name="moyenne"
                    component="small"
                    className="text-warning"
                  />
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

export default ModifierStatsSport;
