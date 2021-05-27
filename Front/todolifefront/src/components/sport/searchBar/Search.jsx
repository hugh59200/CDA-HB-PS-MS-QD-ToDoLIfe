import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import SportService from "../../../service/SportService";

import "../../../assets/css/sport/searchBar/search_bar.css";

const validationSchema = yup.object().shape({
  lettre: yup
    .string()
    .required("Required")
    .matches(/^[A-Z]*$/, "Must be one capital letter")
    .max(1, "Must be one letter"),
});

const Search = () => {

  const [list, setList] = useState("");

  const initialValues = {
    lettre: "",
  };

  const submit = (values) => {
    showOrDisableForm();
    // console.log(values);

    SportService.startWith(values.lettre).then((res) => {
      //   console.log(res.data);

      let dataRecup = res.data.map((elem, i) => (
        <div key={i}>
          <h5 className="select-sport-item" onClick={() => click(elem.label)}>
            {elem.label}
          </h5>
        </div>
      ));

      setList(dataRecup);
    });
  };

  const click = (label) => {
    localStorage.setItem("sport", label);
    // console.log("sport", localStorage.getItem("sport"));
    document.querySelector("#select-sport").className =
      "not-show-search-bar-sport";

    setList("");

    document.querySelector("#form-stat-sport").className =
      "show-search-bar-sport";
      
      console.log("label",label)
      
  };

  const showOrDisableForm = () => {
    document.querySelector("#form-stat-sportive").className =
      "not-show-search-bar-sport";
    document.querySelector("#form-title-sportive").className =
      "not-show-search-bar-sport";
    document.querySelector("#select-sport").className = "show-search-bar-sport";
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
      >
        {() => (
          <div className="show-search-bar-sport" id="form-stat-sportive">
            <Form>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="lettre" className="text-white"></label>
                  <br />
                  <Field
                    className="text-center input-search-sport"
                    type="text"
                    name="lettre"
                    placeholder="lettre"
                  />
                  <ErrorMessage
                    name="lettre"
                    component="small"
                    className="text-warning"
                  />
                </div>
                <button className="btn btn-primary btn-form-sport-send" type="submit">
                  <h3>Suivant</h3>
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <h1 id="select-sport" className="not-show-search-bar-sport">
        Sélection d'un sport :
      </h1>
      <div className="d-flex flex-column align-items-center">{list}</div>
    </>
  );
};

export default Search;
