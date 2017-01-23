import React from 'react';

class ForecastingSupport extends React.Component {
    render() {
        return (
            <table id="forecasting-support">
                <tbody>
                    <tr>
                        <td className="what-words">
                            <h3>Forecasting Support</h3>
                            <p>
                                Accurate forecasting plays an essential role at multiple levels of an 
                                organization. Fine-grained estimates of demand volume help to minimize 
                                manufacturing and operational costs over the short term, while high-level 
                                projections of sales revenue inform strategic planning and organizational 
                                development over the long term.
                            </p>
                            <p>
                                Our consultants offer expertise in both the technical and organizational 
                                aspects of forecasting. We will work with you to apply rigorous statistical 
                                techniques to your data sources, develop a forecast that fits the unique 
                                contours of your market and business needs, and identity and quantify 
                                sources of risk and uncertainty.
                            </p>
                        </td>
                        <td className="what-image"></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ForecastingSupport;