import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_TODO_LIST } from "../../constant/URL_CONST";
import TodolistService from "../../service/TodolistService";
import UtilisateurService from "../../service/UtilisateurService";

const validationSchema = yup.object().shape({
  labelList: yup.string().required("required"),
  // utilisateur: yup.string().required("required")
});

const AddList = () => {
  const history = useHistory();
  const [user, setUser] = useState("");

  const initialValues = {
    labelList: "",
  };

  const getUser = () => {
    UtilisateurService.getById(localStorage.getItem("id")).then(res => {
      setUser(res.data);
    });
  };

  const makeList = (values) => {
    // console.log(values)

    let test = {
      label: values.labelList,
      utilisateur: user,
    };

    submit(test);
  };

  useEffect(() => {
    getUser();
  }, []);

  const submit = (list) => {
    // console.log("list", list);

    TodolistService.create(list).then((res) => {
      let code = res.status;

      if (code === 200) {
        history.push(URL_TODO_LIST);
      }
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={makeList}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <label className="text-white" htmlFor="labelList">
              <h1>Label : </h1>
            </label>
            <Field type="text" name="labelList" placeholder="label" />
            <ErrorMessage name="labelList" component="small" />
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
