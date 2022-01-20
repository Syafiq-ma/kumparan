import {combineReducers} from 'redux';
import post from './postReducers';
import user from './userReducer'

export default combineReducers({
    post,
    user
})