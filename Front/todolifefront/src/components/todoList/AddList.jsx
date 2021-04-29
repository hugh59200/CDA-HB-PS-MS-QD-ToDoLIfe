import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_TODO_LIST } from "../../constant/URL_CONST";
import TodolistService from "../../service/TodolistService";

const validationSchema = yup.object().shape({
  label: yup.string().required("required"),
  // utilisateur: yup.string().required("required")
});

const AddList = () => {
  const history = useHistory();

  const submit = (values) => {
    console.log(values);

    TodolistService.create(values.id, values.label)
      .then((res) => {
        let code = res.status;
        console.log(res.body);
        console.log(res);

        if (code === 200) {
          history.push(URL_TODO_LIST);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  const initialValues = {
    label: "",
    id: localStorage.getItem("id"),
  };

  useEffect(() => {
    // console.log(initialValues);
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
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
            {/* <Field
                className="invisible"
                type="text"
                name="utilisateur"
                value={localStorage.getItem('id')}
              /> */}
            {/* <ErrorMessage name="utilisateur" component="small" /> */}
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddList;
