import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import emails from './emailReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    emails,
    ajaxCallsInProgress
});

export default rootReducer;