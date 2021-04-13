import React, { Component } from 'react';
import TodoListView from '../../views/TodoListView.jsx';
import { Route, Switch } from 'react-router';
import Home from '../../views/Home.jsx';
import {URL_TODO_LIST, URL_CONNEXION, URL_HOME } from '../constant/URL_CONST.js';
import {createBrowserHistory} from 'history';
import ConnexionForm from '../../components/form/connexion/ConnexionForm.jsx';

const CustomHistory = createBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <>
                    <Switch history={CustomHistory}>
                        <Route exact path={URL_HOME} component={Home}></Route>
                        <Route exact path={URL_CONNEXION} component={ConnexionForm}></Route>
                        <Route path={URL_TODO_LIST} component={TodoListView}></Route>
                    </Switch>
            </>
        );
    }
}

export default Routes;