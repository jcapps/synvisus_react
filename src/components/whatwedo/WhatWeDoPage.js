import React from 'react';
import ForecastingSupport from './ForecastingSupport';
import SoftwareDevelopment from './SoftwareDevelopment';
import OperationsManagement from './OperationsManagement';

class WhatWeDoPage extends React.Component {
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