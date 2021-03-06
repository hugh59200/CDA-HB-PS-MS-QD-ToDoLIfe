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

const AddTodo = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  const initialValues = {
    label: "",
    donne : false
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
      donne: values.donne,
      list: list,
    };
    
    // console.log(todo)
    submit(todo);
  };

  useEffect(() => {
    getList();
  }, []);

  const submit = (todo) => {
    console.log(todo)
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
  
  const retour = () =>{
    history.push(URL_INSIDE_TODOLIST)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={makeTask}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
          <div className="d-flex justify-content-center align-self-stretch">
            <label className="text-white" htmlFor="label">
              <h1> label : </h1>
            </label>
            <Field type="text" name="label" placeholder="label" />
            <ErrorMessage name="label" component="small" />
          </div>
            <br />
            <div className="d-flex align-items-center justify-content-center mt-1">
            <button type="submit" className="btn btn-success"> ajouter</button>
            <button onClick={retour} className="btn btn-primary"> Retour</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddTodo;
