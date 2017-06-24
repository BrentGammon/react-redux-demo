import { combineReducers } from 'redux'

import user from './userReducer';
import apiCalls from './apiCallsReducer';

export default combineReducers({
    user,
    apiCalls
})