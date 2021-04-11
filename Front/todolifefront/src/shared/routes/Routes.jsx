import React, { Component } from 'react';
import TodoListView from '../../views/TodoListView.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../views/Home.jsx';
import { URL_HOME, URL_TODO_LIST } from '../constant/URL_CONST.js';
class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path={URL_HOME} component={Home}></Route>
                        <Route path={URL_TODO_LIST} component={TodoListView}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routes;