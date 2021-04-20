import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import * as yup from "yup";
import TodolistService from "../../service/TodolistService";

import { URL_TODO_LIST } from "../../shared/constant/URL_CONST";

const validationSchema = yup.object().shape({
  label: yup.string().required("required"),
  // utilisateur: yup.string().required("required")
});

// let USER_ID = JSON.parse(localStorage.getItem("utilisateur").id);
// const USER = localStorage.getItem('utilisateur');

let result = [];

class AddList extends Component {
  state = {
    initialValues: {
      label: "",
      utilisateur: "",
    },
    label: [],
    utilisateur: [],
  };

  submit = (values) => {
    console.log(values);
    TodolistService.create(values).then((res) => {
      console.log(res);
    });

    this.props.history.push(URL_TODO_LIST);
  };

  componentWillMount() {

  }

  render() {
    const { initialValues } = this.state;

    return (
      <>
        <Formik
          initialValues={initialValues}
          onSubmit={this.submit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <label className="text-white" htmlFor="label">
                <h1>Label : </h1>
              </label>
              <br />
              <Field type="text" name="label" placeholder="label" />
              <ErrorMessage name="label" component="small" />
              <br />
              <button type="submit"> Submit</button>
              <Field
                className="invisible"
                type="text"
                name="utilisateur"
                // value={result[1]}
              />
              {/* <ErrorMessage name="utilisateur" component="small" /> */}
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default AddList;
