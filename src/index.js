import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Page from './components/Page';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import store from'./store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/page' component={Page}/>  
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

