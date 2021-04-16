import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";

function TodoForm(props) {
  const history = useHistory();
  // console.log(history.location.curentList);
  // console.log(history.location.curentList.label);
  
  let labelList = history.location.curentList;
  console.log(labelList);
  

  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button
            onClick={handleSubmit}
            className="todo-button-update btn"
          ></button>
        </>
      ) : (
        <>
          <h1 className="text-white">{
            
          }</h1>
          <input
            placeholder="Ajouter une tache"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button btn"></button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
