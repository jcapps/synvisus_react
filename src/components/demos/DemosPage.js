import React from 'react';
import Video from './Video.js';

class DemosPage extends React.Component {
    componentDidMount() {
        document.title = "Synvisus: Demos";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="demos-page">
                <h3 className="section-header"><b>Events and Risk Assessment</b></h3>
                <Video filename={"events_and_risk_assessment"}/>
                <h3 className="section-header"><b>Data Import and Outlier Correction</b></h3>
                <Video filename={"data_import_and_outlier_correction"}/>
                <h3 className="section-header"><b>Custom Calculation Funnel</b></h3>
                <Video filename={"custom_calculation_funnel"}/>
                <h3 className="section-header"><b>Trend-Based Forecasting</b></h3>
                <Video filename={"trend_based_forecasting"}/>
            </div>
        );
    }
}

export default DemosPage;