import "../../../assets/css/todolist/todo-list.css";

import React, { useEffect, useState } from "react";
import TodolistService from "../../../service/TodolistService";
import { useHistory } from "react-router";
import {
  URL_INSIDE_TODOLIST,
  URL_NEW_TODO_LIST,
  URL_UPDATE_TODO_LIST,
} from "../../../constant/URL_CONST";

const TodoListView = () => {
  const history = useHistory();

  const [list, setList] = useState([]);

  // const [currentCountries, setCurrentCountries] = useState([]);
  // const [currentPage, setCurrentPage] = useState(null);
  // const [totalPages, setTotalPages] = useState(null);

  // const totalCountries = allCountries.length;

  useEffect(() => {
    getListByUser();
    // onPageChanged()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // console.log("list",allCountries);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListByUser = () => {
    TodolistService.getListByUser(localStorage.getItem("id")).then((res) => {
      let dataRecup = res.data;
      let postData = dataRecup.map((elem) => (
        <div key={elem.idTodoList} className="css-list-todo">
          <div
            className="media-todo-list col-8"
            onClick={() => clickTodo(elem.idTodoList, elem.label)}
          >
            <h6 className="ml-4 text-left text-white w-100">{elem.label}</h6>
          </div>
          <div className="media-todo-list col-4 mobile">
            <button
              onClick={() => updateList(elem.idTodoList, elem.label)}
              className="todo-button-update float-right mr-4"
            ></button>
            <button
              onClick={() => removeList(elem.idTodoList)}
              className="todo-button-remove float-right mr-1"
            ></button>
          </div>
        </div>
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

  // const onPageChanged = (data) => {
  //   // const { allCountries } = this.state;
  //   // console.log(data)
  //   const { currentPage, totalPages, pageLimit } = data;

  //   const offset = (currentPage - 1) * pageLimit;
  //   const currentCountries = allCountries.slice(offset, offset + pageLimit);

  //   setCurrentPage(currentPage);
  //   setCurrentCountries(currentCountries);
  //   setTotalPages(totalPages);

  // }

  return (
    <>
      <div className="justify-content-cente align-items-center">
        <button onClick={clickAdd} className="todo-button-add div-haut d-flex"></button>
        <h1 className="text-white text-center title-list">Mes Todo listes :</h1>
      </div>

      {list.length % 2 === 0 ? (
        <>
          <div className="todo-app todo-app-paire test-scroll-paire">
            {list}
          </div>
        </>
      ) : (
        <>
          <div className="todo-app todo-app-impaire test-scroll-impaire">
            {list}
          </div>
        </>
      )}

      {/* {currentCountries} */}

      {/* <Pagination
          totalRecords={totalCountries}
          pageLimit={5}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
        /> */}
    </>
  );
};

export default TodoListView;
