// import React, { useState } from "react";
// // import { useHistory } from 'react-router';
// import Todo from "./Todo";
// import TodoForm from "./TodoForm";

// const Task = (props) => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     setTodos((prev) =>
//       prev.map((item) => (item.id === todoId ? newValue : item))
//     );
//   };

//   const removeTodo = (id) => {
//     const removedArr = [...todos].filter((todo) => todo.id !== id);

//     setTodos(removedArr);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <>
//       {/* <h1 className="todolist-title">{todolist.name}</h1> */}
//       <TodoForm onSubmit={addTodo} />
//       <Todo
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//       />
//     </>
//   );
// };

// export default Task;


import React from 'react';
import { useHistory } from 'react-router';

const Task = () => {
  
  
  const history = useHistory();
    console.log(history.location.curentList)
    
    
  return (
    <div>
      
    </div>
  );
};

export default Task;
