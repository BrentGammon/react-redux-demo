import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { applyMiddleware,createStore,compose } from 'redux';


import reducers from './reducers';

const middleware = applyMiddleware(thunk,logger);

export default createStore(reducers, compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))