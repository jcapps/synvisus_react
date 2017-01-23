import React from 'react';
import BusinessInsights from './BusinessInsights';
import PracticalSolutions from './PracticalSolutions';
import TechnicalCapabilities from './TechnicalCapabilities';

class ValueProposition extends React.Component {
    render() {
        return (
            <div id="value-proposition">
                <h3 className="section-header"><b>Value Proposition</b></h3>
                <div id="proposition-container">
                    <BusinessInsights/>
                    <div id="left-chevron"/>
                    <PracticalSolutions/>
                    <div id="right-chevron"/>
                    <TechnicalCapabilities/>
                </div>
            </div>
        );
    }
}

export default ValueProposition;