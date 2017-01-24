import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Logos = () => {
    const isInternetExplorerOrEdge = () => {
        return navigator.appName == 'Microsoft Internet Explorer' 
            || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1);
    };

    let logo = require("../../images/SynvisusLogo.png");
    let motto = require("../../images/Motto.png");

    if (isInternetExplorerOrEdge) {
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