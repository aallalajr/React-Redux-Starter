import * as types from './actionTypes';
import orgApi from '../api/mockOrgApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadOrgsSuccess(orgs) {
    return { type: types.LOAD_ORGS_SUCCESS, orgs};
}

export function createOrgSuccess(org) {
    return { type: types.CREATE_ORG_SUCCESS, org};
}

export function updateOrgSuccess(org) {
    return { type: types.UPDATE_ORG_SUCCESS, org};
}

export function loadOrgs() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return orgApi.getAllOrgs().then(orgs => {
            dispatch(loadOrgsSuccess(orgs));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveOrg(org) {
  return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return orgApi.saveOrg(org).then(org => {
            org.id ? dispatch(updateOrgSuccess(org)) :
                dispatch(createOrgSuccess(org));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}