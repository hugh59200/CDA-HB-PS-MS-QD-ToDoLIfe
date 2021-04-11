import React, { Component } from 'react';
import TodoList from './../components/todoList/TodoList';
// eslint-disable-next-line no-unused-vars
import CSS from '../assets/css/todolist/todo-list.css';

class TodoListView extends Component {
    render() {
        return (
            <>
                <div className='todo-app'>
                    <TodoList />
                </div>
            </>
        );
    }
}

export default TodoListView;