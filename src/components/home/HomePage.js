import React from 'react';
import Jumbotron from './Jumbotron';
import HomeDescription from './HomeDescription';
import AdditionalLinks from './AdditionalLinks';

class HomePage extends React.Component {
    componentDidMount() {
        document.title = "Synvisus: Home";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="home-page">
                <Jumbotron />
                <HomeDescription />
                <AdditionalLinks />
            </div>
        );
    }
}

export default HomePage;