import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default
import WhatWeDoPage from './components/whatwedo/WhatWeDoPage';
import ContactUsPage from './components/contact/ContactUsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course(/:id)" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="whatwedo" component={WhatWeDoPage} />
        <Route path="contact" component={ContactUsPage} />
    </Route>
);