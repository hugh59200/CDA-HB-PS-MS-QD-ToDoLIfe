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
        <tr key={elem.idTodoList}>
          <td
            className="text-white"
            onClick={() => clickTodo(elem.idTodoList, elem.label)}
          >
            {elem.label}
          </td>
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
      ));

      setList(postData);
    });
  };

  const removeList = (id) => {
    TodolistService.removeById(id).then((res) => {
      console.log(res);
    });
    history.go(0);
  };

  const updateList = (id, label) => {
    history.push({
      pathname: URL_UPDATE_TODO_LIST,
      labelList: label,
      idList: id,
    });
  };

  const clickTodo = (id, label) => {
    history.push({
      pathname: URL_INSIDE_TODOLIST,
      labelList: label,
      idList: id,
    });
  };

  const clickAdd = () => {
    history.push(URL_NEW_TODO_LIST);
  };

  return (
    <div className="todo-app">
      <h1 className="text-white text-center">Mes todolist :</h1>
      <br />
      <div className=" h-auto w-auto table text-center d-flex justify-content-center">
        <table>
          <tbody>{list}</tbody>
          <tfoot>
            <button onClick={clickAdd} className="todo-button-add"></button>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TodoListView;
