import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Logos from './Logos';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header>
            <Logos/>
            <NavBar/>
        </header>
    );
};

export default Header;