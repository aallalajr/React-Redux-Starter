import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function orgReducer(state = initialState.orgs, action) {
    switch(action.type) {
        case types.LOAD_ORGS_SUCCESS:
            return action.orgs;
            
        case types.CREATE_ORG_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.org)
            ];
                        
        case types.UPDATE_ORG_SUCCESS:
            return [
                ...state.filter(org => org.id !== action.org.id),
                Object.assign({}, action.org)
            ];
            
        default:            
            return state;
    }
}