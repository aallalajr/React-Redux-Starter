import {combineReducers} from 'redux';
import orgs from './orgReducer';
import members from './memberReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    orgs,
    members,
    ajaxCallsInProgress
});

export default rootReducer;