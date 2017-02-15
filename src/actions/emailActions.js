import emailApi from '../api/emailApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function sendEmail(email) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return emailApi.sendEmail(email).then(wasEmailed => {
            if (!wasEmailed) throw('Error: There was a problem trying to send your email. Email was not sent.');
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}