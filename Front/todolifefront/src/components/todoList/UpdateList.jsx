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

const UpdateList = (props) => {
  const history = useHistory();
  //   const [list, setList] = useState("");
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
    // console.log(values)

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
    // console.log("list", list);

    TodolistService.update(list).then((res) => {
        console.log(res)

      let code = res.status;

      let data = res.data;
      console.log(code);
      console.log(data);

      if (code === 200) {
        history.push(URL_TODO_LIST);
      }
    });
  };

  useEffect(() => {
    // console.log(initialValues)
  }, []);

  return (
    <>
      <h1>update list</h1>

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

export default UpdateList;
