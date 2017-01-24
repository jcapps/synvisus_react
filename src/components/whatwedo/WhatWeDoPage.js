import React from 'react';
import ForecastingSupport from './ForecastingSupport';
import SoftwareDevelopment from './SoftwareDevelopment';
import OperationsManagement from './OperationsManagement';

class WhatWeDoPage extends React.Component {

    componentDidMount() {
        document.title = "Synvisus: What We Do";
        const path = window.location.href;
        const pathSplits = path.split('#');
        if (pathSplits.length == 2) {
            const section = pathSplits[1];
            const header = document.querySelector('header');
            const element = document.querySelector(`#${section}`);
            window.scrollTo(0, element.offsetTop - header.offsetHeight);
        } else {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div id="what-we-do-page">
                <ForecastingSupport/>
                <SoftwareDevelopment/>
                <OperationsManagement/>
            </div>
        );
    }
}

export default WhatWeDoPage;