import React from "react";
// import TodoList from "./../components/todoList/TodoList";
// eslint-disable-next-line no-unused-vars
import CSS from "../assets/css/todolist/todo-list.css";
import MyTodoList from "../components/todoList/MyTodoList";
// import { useHistory } from "react-router";
import Task from "../components/todoList/Task";
// import Footer from '../components/todoList/Footer';

const TodoListView = (props) => {
    
    // const history = useHistory();
    
  return (
    <>
      <div className="container-fluid">
        <div className="row compo-todo">
          {/* <div className="text-center text-white todolist-title md-6 ml-6">Todolists</div> */}

          <div className="todo-app md-6 ml-6">
            <MyTodoList />
          </div>
          {/* <div className="todo-app md-6 ml-6">
            <TodoList />
          </div> */}
          
          <div div className="todo-app md-6 ml-6">
                
                <Task />    
          
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};

export default TodoListView;
