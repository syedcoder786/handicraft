import {combineReducers} from 'redux';
import categoryReducer from './categoryReducers';
import errorReducers from './errorReducers';
import authReducers from './authReducers';

export default combineReducers({
    categories:categoryReducer,
    error:errorReducers,
    auth:authReducers
});