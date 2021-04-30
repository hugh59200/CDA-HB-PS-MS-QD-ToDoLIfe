import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { URL_INSIDE_TODOLIST, URL_TODO_LIST } from "../../constant/URL_CONST";
import TacheService from "../../service/TacheService";
import Cookies from "universal-cookie";

const TodoInside = () => {
  // const cookies = new Cookies();

  const history = useHistory();

  const [list, setList] = useState("");

  const [idTache, setIdTache] = useState("");

  const [labelTache, setLabelTache] = useState("");

  const getTodo = () => {
    TacheService.getListByIdToDoList(localStorage.getItem("id_task")).then(
      (res) => {
        let dataRecup = res.data;

        console.log(dataRecup);

        let postData = dataRecup.map((elem) => (
          <>
            <tr key={elem.idTache}>
              <td
              // onClick={() => clickList(elem.idTodoList, elem.label)}
              >
                {elem.label}
              </td>
              {/* {console.log(elem.idTodoList)} */}
              <td>
                <button
                  // onClick={() => updateList(elem.idTodoList, elem.label)}
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
    let idTask = history.location.idList;
    let labelTask = history.location.labelList;

    localStorage.setItem("id_task", idTask);
    localStorage.setItem("label_task", labelTask);

    // setIdTache(localStorage.getItem('id_task'));
    // setLabelTache(localStorage.getItem('label_task'));
  };

  const removeTodo = (id) => {
    console.log(id);
    TacheService.removeById(id).then((res) => {
      let code = res.status;

      console.log(code);

      if (code === 200) {
        putIdLabelList();
        getTodo();
      }
    });
  };

  useEffect(() => {
    putIdLabelList();
    getTodo();
    // console.log(history.location)
    // console.log(history.location.idList)
    // console.log(history.location.labelList)

    // getIdLabel()
    // console.log("id",id);
    // console.log("label",label)
    // getTodo()
    // console.log("id",id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <>

    // {/* {console.log(props.history.location.idList)}
    // {console.log(props.history.location.labelList)} */}

    // <h1 className="text-center text-white">
    // List : {props.history.location.labelList}
    // </h1>

    // </>

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
          {localStorage.getItem("label_task")}
        </h1>
        <br />
        <div className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <table>
            <tbody>{list}</tbody>
            <button
              onClick={function () {
                console.log("click");
              }}
              className="todo-button-add"
            ></button>
          </table>
        </div>
      </div>

      {/* <div className="todo-app">
        <h1 className="text-white text-center">{label} </h1>
        <br />
        <table className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <tbody>{tache}</tbody>
        </table>
      </div> */}
    </>
  );
};

export default TodoInside;
