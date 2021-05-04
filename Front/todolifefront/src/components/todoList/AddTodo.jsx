import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { URL_INSIDE_TODOLIST } from "../../constant/URL_CONST";
import TacheService from "../../service/TacheService";
import TodolistService from "../../service/TodolistService";

const validationSchema = yup.object().shape({
  label: yup.string().required("required"),
});

const AddTodo = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  const initialValues = {
    label: ""
  };

  const getList = () => {
    TodolistService.getListById(localStorage.getItem("id_todolist")).then(
      (res) => {
        setList(res.data);
      }
    );
  };

  const makeTask = (values) => {
    let todo = {
      label: values.label,
      list: list,
    };
    submit(todo);
  };

  useEffect(() => {
    getList();
  }, []);

  const submit = (todo) => {
    TacheService.create(todo).then((res) => {
      let code = res.status;

      if (code === 200) {
        let idTodoList = localStorage.getItem("id_todolist");
        let labelTodoList = localStorage.getItem("label_todolist");
        
        history.push({
          pathname: URL_INSIDE_TODOLIST,
          idList: idTodoList,
          labelList: labelTodoList,
        });
      }
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={makeTask}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <label className="text-white" htmlFor="label">
              <h1> add todo : </h1>
            </label>
            <Field type="text" name="label" placeholder="label" />
            <ErrorMessage name="label" component="small" />
            <br />
            <button type="submit" className="todo-button-back"> Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddTodo;
