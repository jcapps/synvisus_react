import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import getBrowserInfo from '../../helpers/getBrowserInfo';

const Logos = () => {
    const browser = getBrowserInfo();

    let logo = require("../../images/SynvisusLogo.png");
    let motto = require("../../images/Motto.png");

    if (browser == "IE" || browser == "Edge") {
        logo = require("../../images/SynvisusLogoIE.png");
        motto = require("../../images/MottoIE.png");
    }

    return (
        <div id="logos-container">
            <Link to="/">
                <img id="logo" src={logo} alt="Logo"/>
            </Link>
            <img id="motto" src={motto} alt="Motto"/>
        </div>
    );
};

export default Logos;