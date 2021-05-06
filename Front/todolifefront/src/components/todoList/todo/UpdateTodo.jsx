import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_INSIDE_TODOLIST } from "../../../constant/URL_CONST";
import TacheService from "../../../service/TacheService";
import TodolistService from "../../../service/TodolistService";

const validationSchema = yup.object().shape({
  label: yup.string().required("required"),
});

const UpdateTodo = (props) => {
  const history = useHistory();
  const [list, setList] = useState("");

  const initialValues = {
    idTache: props.history.location.idTodo,
    label: props.history.location.labelTodo,
  };

  const getList = () => {
    TodolistService.getListById(localStorage.getItem("id_todolist")).then(
      (res) => {
        setList(res.data);
      }
    );
  };

  const makeTask = (values) => {
    let test = {
      idTache: values.idTache,
      label: values.label,
      list: list,
    };
    submit(test);
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = (todo) => {

    TacheService.update(todo).then((res) => {
      let code = res.status;
      console.log(res.data);

      if (code === 200) {
        let idTodoList = localStorage.getItem("id_todolist");
        let labelList = localStorage.getItem("label_todolist");

        history.push({
          pathname: URL_INSIDE_TODOLIST,
          idList: idTodoList,
          labelList: labelList,
        });
      }
    });
  };
  
  const retour = () =>{
    history.push(URL_INSIDE_TODOLIST)
  }

  return (
    <>
      <h1 className="text-white text-center">update todo</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={makeTask}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="d-flex justify-content-center">
              <label htmlFor="label">
                <h1 className="text-white">Label : </h1>
              </label>
              <Field type="text" name="label" placeholder="label" />
              <ErrorMessage name="label" component="small" />
            </div>
            <br />
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success"> Submit</button>
            <button onClick={retour} className="btn btn-primary"> Retour</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateTodo;
