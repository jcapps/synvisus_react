import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WhatWeDoPage from './components/whatwedo/WhatWeDoPage';
import DemosPage from './components/demos/DemosPage';
import ContactUsPage from './components/contact/ContactUsPage';
import TermsPage from './components/terms/TermsPage';
import PrivacyPage from './components/privacy/PrivacyPage';

export default (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="about" component={AboutPage} />
            <Route path="whatwedo" component={WhatWeDoPage} />
            <Route path="demos" component={DemosPage} />
            <Route path="contact" component={ContactUsPage} />
        </Route>
        <Route path="/terms" component={TermsPage} />
        <Route path="/privacy" component={PrivacyPage} />
    </div>
);