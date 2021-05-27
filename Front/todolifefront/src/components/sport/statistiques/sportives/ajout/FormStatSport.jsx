import "../../../../../assets/css/sport/searchBar/search_bar.css";

import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";


import "../../../../../assets/css/sport/searchBar/search_bar.css";
import { URL_SPORT_STATS } from "../../../../../constant/URL_CONST";
import SportService from "../../../../../service/SportService";


const validationSchema = yup.object().shape({
  moyenne: yup.string().required("Required"),

});

const FormStatSport = () => {
  
  const history = useHistory();
  
  const initialValues = {
    moyenne: "",
  };

  const submit = (values) => {
    
    let sport_label = localStorage.getItem("sport");

    SportService.findBylabel(sport_label)
      .then((res) => {
        
        let data = {

          "moyenneSemaine": values.moyenne,
          "sport": {
            "idSport": res.data.idSport,
            "label": res.data.label
          },
          "statistiques":  JSON.parse(localStorage.getItem("stat"))
        }

        console.log("data", data);

        SportService.createStatSport(data).then((res) => {
          console.log("res", res);
        });
      })
      .catch((err) => {}
             );
      
      localStorage.removeItem("sport")
      history.push(URL_SPORT_STATS)
      // history.go(0)
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
              <div className="d-flex flex-column align-items-center justify-content-center form-moyenne-semaine">
                <div className="form-group d-flex flex-column align-items-center">
                  <label htmlFor="moyenne" className="text-white">
                    <h3>Moyenne par semaine :</h3>
                  </label>
                  <br />
                  <div><Field
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
                  <h3>
                  Envoyer
                  </h3>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormStatSport;
