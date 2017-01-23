import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
    it('Should handle creating courses', function() {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };
        const course2 = {
            title: "Test Course"
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        const action2 = courseActions.createCourseSuccess(course2);
        store.dispatch(action);
        store.dispatch(action2);

        // assert
        const actual = store.getState().courses[0];
        const actual2 = store.getState().courses[1];
        const expected = { title: "Clean Code" };
        const expected2 = { title: "Test Course" };

        expect(actual).toEqual(expected);
        expect(actual2).toEqual(expected2);
    });
});