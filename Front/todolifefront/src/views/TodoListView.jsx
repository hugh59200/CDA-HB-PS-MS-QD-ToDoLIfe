import "../assets/css/todolist/todo-list.css";

import React, { useEffect, useState } from "react";
import TodolistService from "../service/TodolistService";
import { useHistory } from "react-router";
import { URL_NEW_TODO_LIST, URL_UPDATE_TODO_LIST } from "../constant/URL_CONST";

const TodoListView = () => {
  const history = useHistory();
  const [list, setList] = useState("");
  // const [tache, setTache] = useState("");
  // const [utilisateur, setUtilisateur] = useState("");

  useEffect(() => {
    // getUser();

    getListByUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListByUser = () => {
    TodolistService.getListByUser(localStorage.getItem("id")).then((res) => {
      let dataRecup = res.data;

      let postData = dataRecup.map((elem) => (
        <>
          <tr key={elem.idTodoList}>
            <td onClick={() => clickList(elem.idTodoList)}> {elem.label}</td>
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
      pathname : URL_UPDATE_TODO_LIST,
      labelList: label,
      idList: id,
    });
    
    // console.log(history.location.pathname);
    // console.log('id : ',history.location.idList);
    // console.log('label : ',history.location.labelList);

  };

  const clickList = (id) => {
    console.log("click list n°" + id);
  };

  const clickAdd = () => {
    // console.log("click add");
    history.push(URL_NEW_TODO_LIST);
  };

  // const changeCurrentList = (elem) => {
  //   history.push({
  //     pathname: URL_TODO_LIST,
  //     id: elem.idTodoList,
  //     label: elem.label,
  //   });

  //   setLabel(history.location.label);

  //   // TacheService.getListByIdToDoList(history.location.id).then((res) => {
  //   //   let dataRecup = res.data;
  //   //   let postData = dataRecup.map((elem) => (
  //   //     <tr
  //   //       // className="table-bordered"
  //   //       key={elem.idTache}
  //   //     >
  //   //       <td className="text-white">{elem.label}</td>
  //   //     </tr>
  //   //   ));
  //   //   // console.log(postData);

  //   //   setTache(postData);
  //   // });
  // };

  // const getUser = () => {
  //   // UtilisateurService.getCurrentUser(1).then((res) => {
  //   //   localStorage.setItem("utilisateur", JSON.stringify(res.data));
  //   // });
  // };

  // const newList = () => {
  //   history.push(URL_NEW_TODO_LIST);
  // };

  return (
    <>
      <div className="todo-app">
        <h1 className="text-white text-center">My tolist :</h1>
        <br />
        <div className="table-responsive h-auto w-auto table text-center d-flex justify-content-center">
          <table>
            <tbody>{list}</tbody>
            <button onClick={clickAdd} className="todo-button-add"></button>
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

export default TodoListView;

// {/* <button className="todo-button-add"></button> */}
