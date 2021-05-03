import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  URL_NEW_TODO,
  URL_TODO_LIST,
  URL_UPDATE_TODO,
} from "../../constant/URL_CONST";
import TacheService from "../../service/TacheService";

const TodoInside = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  const getTodo = () => {
    TacheService.getListByIdToDoList(localStorage.getItem("id_todolist")).then(
      (res) => {
        let dataRecup = res.data;

        let postData = dataRecup.map((elem) => (
          <>
            <div
              key={elem.idTache}
              className="overflow-auto mx-auto align-middle d-flex flex-row justify-content-around row css-list-todo"
            >
              <div
                className="media-todo-list col-3 text text-white w-100"
                // onClick={function (e) {
                //   let text = e.target.innerHTML;
                //   // console.log(text)

                //   // let text = "<del>"+e.target+"</del>";
                //   // console.log(text)

                //   e.target.innerHTML = "<del>" + text + "</del>";
                // }}
              >
                {elem.label}
              </div>
              <div className="media-todo-list col-3">
                <button
                  onClick={() => updateTodo(elem.idTache, elem.label)}
                  className="todo-button-update"
                ></button>
              </div>
              <div className="media-todo-list col-3">
                <button
                  onClick={() => removeTodo(elem.idTache)}
                  className="todo-button-remove"
                ></button>
              </div>
            </div>
          </>
        ));
        setList(postData);
      }
    );
  };

  const putIdLabelList = () => {
    let idTodoList = history.location.idList;
    let labelTodoList = history.location.labelList;

    localStorage.setItem("id_todolist", idTodoList);
    localStorage.setItem("label_todolist", labelTodoList);
  };

  const removeTodo = (id) => {
    TacheService.removeById(id).then((res) => {
      let code = res.status;
      if (code === 200) {
        putIdLabelList();
        getTodo();
      }
    });
  };
  const clickAdd = () => {
    // console.log("click add");
    history.push(URL_NEW_TODO);
  };

  const updateTodo = (id, label) => {
    history.push({
      pathname: URL_UPDATE_TODO,
      labelTodo: label,
      idTodo: id,
    });
  };

  useEffect(() => {
    putIdLabelList();
    if (localStorage.getItem("label_todolist") === "undefined") {
      history.push(URL_TODO_LIST);
    } else {
      getTodo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="todo-app">
        <button
          className="todo-button-back float-left text-white"
          onClick={function () {
            history.push(URL_TODO_LIST);
          }}
        >
          retour
        </button>
        <h1 className="text-white text-center">
          {localStorage.getItem("label_todolist")}
        </h1>
        <br />
        <div className="justify-content-aound m-auto p-auto">
          <>{list}</>
        </div>
        <br />
        <button onClick={clickAdd} className="todo-button-add"></button>
      </div>
    </>
  );
};

export default TodoInside;
