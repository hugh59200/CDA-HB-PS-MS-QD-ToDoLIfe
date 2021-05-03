import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_TODO_LIST } from "../../constant/URL_CONST";
import TodolistService from "../../service/TodolistService";
import UtilisateurService from "../../service/UtilisateurService";

const validationSchema = yup.object().shape({
  labelList: yup.string().required("required"),
});

const UpdateList = (props) => {
  const history = useHistory();
  const [user, setUser] = useState("");

  const initialValues = {
    idList: props.history.location.idList,
    labelList: props.history.location.labelList,
  };

  const getUser = () => {
    UtilisateurService.getById(localStorage.getItem("id")).then((res) => {
      setUser(res.data);
    });
  };

  const makeList = (values) => {
    let test = {
      idTodoList: values.idList,
      label: values.labelList,
      utilisateur: user,
    };
    submit(test);
  };

  useEffect(() => {
    getUser();
  }, []);

  const submit = (list) => {
    TodolistService.update(list).then((res) => {
      let code = res.status;

      if (code === 200) {
        history.push(URL_TODO_LIST);
      }
    });
  };

  return (
    <>
      <h1 className="text-white">update list</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={makeList}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <label className="text-white" htmlFor="labelList">
                <h1>Label : </h1>
              </label>
              <Field type="text" name="labelList" placeholder="label" />
              <ErrorMessage name="labelList" component="small" />
            </div>
            <br />
            <button type="submit" className="todo-button-back"> Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateList;
