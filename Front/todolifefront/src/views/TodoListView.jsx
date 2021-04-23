import "../assets/css/todolist/todo-list.css";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { URL_TODO_LIST, URL_NEW_TODO_LIST } from "../constant/URL_CONST";
import TacheService from "../service/TacheService";
import TodolistService from "../service/TodolistService"


const TodoListView = () => {
  const history = useHistory();
  const [list, setList] = useState("");
  const [label, setLabel] = useState("");
  const [tache, setTache] = useState("");
  // const [utilisateur, setUtilisateur] = useState("");

  useEffect(() => {
    // getUser();

    TodolistService.getList().then((res) => {
      let dataRecup = res.data;
      let postData = dataRecup.map((elem) => (
        <tr
          onClick={() => changeCurrentList(elem)}
          // className=" table-bordered"
          key={elem.idTodoList}
        >
          <td className="text-white"> {elem.label} </td>
          <td>
            <button className="todo-button-remove"></button>
          </td>
        </tr>
      ));
      setList(postData);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeCurrentList = (elem) => {
    history.push({
      pathname: URL_TODO_LIST,
      id: elem.idTodoList,
      label: elem.label,
    });

    setLabel(history.location.label);

    TacheService.getListByIdToDoList(history.location.id).then((res) => {
      let dataRecup = res.data;
      let postData = dataRecup.map((elem) => (
        <tr
          // className="table-bordered"
          key={elem.idTache}
        >
          <td className="text-white">{elem.label}</td>
        </tr>
      ));
      // console.log(postData);

      setTache(postData);
    });
  };

  // const getUser = () => {
  //   // UtilisateurService.getCurrentUser(1).then((res) => {
  //   //   localStorage.setItem("utilisateur", JSON.stringify(res.data));
  //   // });
  // };

  const newList = () => {
    history.push(URL_NEW_TODO_LIST);
  };

  return (
    <>
      <div className="todo-app">
        <h1 className="text-white text-center">My tolist :</h1>
        <br />
        <div className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <table>
            <tbody>{list}</tbody>
            <button onClick={newList} className="todo-button-add"></button>
          </table>
        </div>
      </div>

      <div className="todo-app">
        <h1 className="text-white text-center">{label} </h1>
        <br />
        <table className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <tbody>{tache}</tbody>
          {/* <button className="todo-button-add"></button> */}
        </table>
      </div>
    </>
  );
};

export default TodoListView;
