import React from 'react';
import MissionStatement from './MissionStatement.js';
import ValueProposition from './ValueProposition.js';

class AboutPage extends React.Component {
    componentDidMount() {
        document.title = "Synvisus: About";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="about-page">
                <MissionStatement/>
                <ValueProposition/>
            </div>
        );
    }
}

export default AboutPage;