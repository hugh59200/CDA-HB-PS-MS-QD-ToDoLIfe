import "../assets/css/todolist/todo-list.css";

import React, { useEffect, useState } from "react";
import TodolistService from "../service/TodolistService";
import { useHistory } from "react-router";
import {
  URL_INSIDE_TODOLIST,
  URL_NEW_TODO_LIST,
  URL_UPDATE_TODO_LIST,
} from "../constant/URL_CONST";

const TodoListView = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  useEffect(() => {
    getListByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListByUser = () => {
    TodolistService.getListByUser(localStorage.getItem("id")).then((res) => {
      let dataRecup = res.data;

      let postData = dataRecup.map((elem) => (
        <>
          <tr key={elem.idTodoList}>
            <td onClick={() => clickList(elem.idTodoList, elem.label)}>
              {elem.label}
            </td>
            {/* {console.log(elem.idTodoList)} */}
            <td>
              <button
                onClick={() => updateList(elem.idTodoList, elem.label)}
                className="todo-button-update"
              ></button>
            </td>
            <td>
              <button
                onClick={() => removeList(elem.idTodoList)}
                className="todo-button-remove"
              ></button>
            </td>
          </tr>
        </>
      ));

      setList(postData);
    });
  };

  const removeList = (id) => {
    // console.log("remove list n°" + id);
    TodolistService.removeById(id).then((res) => {
      console.log(res);
    });
    history.go(0);
  };

  const updateList = (id, label) => {
    // console.log("update list n°" + id);
    history.push({
      pathname: URL_UPDATE_TODO_LIST,
      labelList: label,
      idList: id,
    });
  };

  const clickList = (id, label) => {
    // console.log("click list n°" + id);
    // console.log("id",id);
    // console.log("label",label)

    history.push({
      pathname: URL_INSIDE_TODOLIST,
      labelList: label,
      idList: id,
    });
  };

  const clickAdd = () => {
    // console.log("click add");
    history.push(URL_NEW_TODO_LIST);
  };

  return (
    <>
      <div className="todo-app">
        <h1 className="text-white text-center">My todolist :</h1>
        <br />
        <div className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <table>
            <tbody>{list}</tbody>
            <button onClick={clickAdd} className="todo-button-add"></button>
          </table>
        </div>
      </div>
    </>
  );
};

export default TodoListView;
