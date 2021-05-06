import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  URL_NEW_TODO,
  URL_TODO_LIST,
  URL_UPDATE_TODO,
} from "../../../constant/URL_CONST";
import TacheService from "../../../service/TacheService";

const Todos = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  const getTodo = () => {
    TacheService.getListByIdToDoList(localStorage.getItem("id_todolist")).then(
      (res) => {
        let dataRecup = res.data;

        let postData = dataRecup.map((elem) => (
          <>
            <div key={elem.idTache} className="css-list-todo">
              <div
                className="media-todo-list col-8 text-white"
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
              <div className="media-todo-list col-4 mobile">
                <button
                  onClick={() => updateTodo(elem.idTache, elem.label)}
                  className="todo-button-update float-right mr-4"
                ></button>
                <button
                  onClick={() => removeTodo(elem.idTache)}
                  className="todo-button-remove float-right mr-1e"
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

  const retour = () => {
    history.push(URL_TODO_LIST);
  };

  return (
    <>
      <div className="d-flex justify-content-around align-items-center div-haut-2">
        <h1 className="text-white text-center tile-list">
          {localStorage.getItem("label_todolist")}
        </h1>
      </div>
      {list.length % 2 === 0 ? (
        <>
          <div className="todo-app todo-app-paire test-scroll-paire-2">
            {list}
          </div>
        </>
      ) : (
        <>
          <div className="todo-app todo-app-impaire test-scroll-impaire-2">
            {list}
          </div>
        </>
      )}
      <div className="d-flex align-items-center justify-content-center mt-1">
        <button onClick={clickAdd} className="btn btn-success">
          ajouter
        </button>
        <button onClick={retour} className="btn btn-primary">
          Retour
        </button>
      </div>
    </>
  );
};

export default Todos;
