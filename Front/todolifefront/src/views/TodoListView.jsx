import React, { Component } from 'react';
import TodoList from './../components/todoList/TodoList';
// eslint-disable-next-line no-unused-vars
import CSS from '../assets/css/todolist/todo-list.css';
import MyTodoList from '../components/todoList/MyTodoList';
// import Footer from '../components/todoList/Footer';

class TodoListView extends Component {
    render() {
        return (

            <>
                <div className="container-fluid">
                    <div className="row compo-todo">


                        {/* <div className="text-center text-white todolist-title md-6 ml-6">Todolists</div> */}

                        <div className='todo-app md-6 ml-6'>
                            <MyTodoList />
                        </div>
                        <div className='todo-app md-6 ml-6'>
                            <TodoList />
                        </div>
                    </div>
                </div>

                {/* <Footer/> */}
            </>
        );
    }
}

export default TodoListView;