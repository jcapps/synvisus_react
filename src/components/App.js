// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div id="container">
                <Header loading={this.props.loading}/>
                <div id="page-content">
                    {this.props.children}
                </div>
                <div id="clear-div"/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);