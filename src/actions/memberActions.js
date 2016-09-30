import MemberApi from '../api/mockMemberApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMembersSuccess(members) {
    return {type: types.LOAD_MEMBERS_SUCCESS, members};
}

export function loadMembers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return MemberApi.getAllMembers().then(members => {
            dispatch(loadMembersSuccess(members));
        }).catch(error => {
            throw(error);
        });
    };
}