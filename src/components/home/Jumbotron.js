import React from 'react';
import {Link} from 'react-router';

const Jumbotron = () => {

    const image = require("../../images/OwlBanner.png");

    return (
        <img id="banner" src={image} alt="Gallery photo" />
    );
};

export default Jumbotron;