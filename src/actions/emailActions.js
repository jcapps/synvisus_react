import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function sendEmailSuccess() {
    return {type: types.SEND_EMAIL_SUCCESS};
}

export function sendEmail(email) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000).then(() => {
                dispatch(sendEmailSuccess());
            }).catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
        });
    };
}