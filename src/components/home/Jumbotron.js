import React from 'react';
import {Link} from 'react-router';

const Jumbotron = () => {
    return (
        <div id="jumbotron">
            <h1>My App</h1>
            <p>Practicing React Web Development</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
    );
};

export default Jumbotron;