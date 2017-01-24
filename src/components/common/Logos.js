import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Logos = () => {
    return (
        <div id="logos-container">
            <Link to="/">
                <img id="logo" src={require("../../images/SynvisusLogo.png")} alt="Logo"/>
            </Link>
            <img id="motto" src={require("../../images/Motto.png")} alt="Motto"/>
        </div>
    );
};

export default Logos;