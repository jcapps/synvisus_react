// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <div id="page-content">
                    {this.props.children}
                </div>
                <div id="clear-div"/>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;