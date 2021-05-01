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
            <tr key={elem.idTache}>
              
                <td
              onClick={function(e){
                
                let text =  e.target.innerHTML;
                // console.log(text)
                
                // let text = "<del>"+e.target+"</del>";
                // console.log(text)
                
                e.target.innerHTML=
                  "<del>"+text+"</del>"
                
              }}
              >
                {elem.label}
              </td>
              <td>
                <button
                  onClick={() => updateTodo(elem.idTache, elem.label)}
                  className="todo-button-update"
                ></button>
              </td>
              <td>
                <button
                  onClick={() => removeTodo(elem.idTache)}
                  className="todo-button-remove"
                ></button>
              </td>
            </tr>
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
    getTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="todo-app">
        <button
          className="todo-button-back float-left"
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

export default TodoInside;
