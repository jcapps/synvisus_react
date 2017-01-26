import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function emailReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.SEND_EMAIL_SUCCESS:
        default:
            return state;
    }
}