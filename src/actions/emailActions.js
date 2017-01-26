import * as types from './actionTypes';
import emailApi from '../api/mockEmailApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function sendEmailSuccess() {
    return {type: types.SEND_EMAIL_SUCCESS};
}

export function sendEmail(email) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return emailApi.sendEmail(email).then(() => {
            dispatch(sendEmailSuccess());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}